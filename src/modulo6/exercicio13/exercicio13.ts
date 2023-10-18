import { isTransacaoNaoNormalizada } from "./helpers/isInterface.js";
import stringParaNumber from "./helpers/stringParaNumber.js";
import stringParaDate from "./helpers/stringParaDate.js";
import { Transacao, TransacaoNaoNormalizada } from "./types";
import numberParaString from "./helpers/numberParaString.js";
import countBy from "./helpers/countBy.js";

async function getDados<T>(): Promise<T | null> {
  try {
    const response = await fetch(
      "https://api.origamid.dev/json/transacoes.json"
    );
    if (!response.ok) throw new Error("Erro " + response.status);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
    return null;
  }
}

function normalizaDados(dados: unknown): Transacao[] | null {
  let dadosNormalizados = null;
  if (dados && Array.isArray(dados)) {
    dadosNormalizados = dados.map((dado) => {
      if (isTransacaoNaoNormalizada(dado)) {
        return {
          status: dado.Status,
          id: dado.ID,
          data: stringParaDate(dado.Data),
          nome: dado.Nome,
          formaDePagamento: dado["Forma de Pagamento"],
          email: dado.Email,
          valor: stringParaNumber(dado["Valor (R$)"]),
          clienteNovo: Boolean(dado["Cliente Novo"]),
        };
      }
      throw new Error("Não é transação");
    });
  }
  return dadosNormalizados;
}

function preencheTabela(transacoes: Transacao[]): void {
  const tabela = document.querySelector("#transacoes tbody");
  if (!tabela) return;
  transacoes.forEach((transacao) => {
    tabela.innerHTML += `
      <tr>
        <td>${transacao.nome}</td>
        <td>${transacao.email}</td>
        <td>R$ ${transacao.valor ? transacao.valor : 0}</td>
        <td>${transacao.formaDePagamento}</td>
        <td>${transacao.status}</td>
        <td>${transacao.data}</td>
      </tr>
    `;
  });
}

function somaTotal(transacoes: Transacao[]): void {
  const somaParagrafo = document.querySelector("#soma-total");
  if (!somaParagrafo) return;
  const valor = transacoes.reduce((acc, cur) => {
    if (cur.valor) {
      return acc + cur.valor;
    }
    return acc;
  }, 0);
  somaParagrafo.innerHTML += `<p>R$ ${numberParaString(valor)}</p>`;
}

function somaPorPagamento(transacoes: Transacao[]): void {
  const pagamentoDiv = document.querySelector("#pagamento");

  if (!pagamentoDiv) return;

  const pagamentos = transacoes.map(({ formaDePagamento }) => formaDePagamento);
  const total = countBy(pagamentos);

  Object.keys(total).forEach((key) => {
    pagamentoDiv.innerHTML += `<p>${key}: <span>${total[key]}</span></p>`;
  });
}

function somaPorStatus(transacoes: Transacao[]): void {
  const statusDiv = document.querySelector("#status");

  if (!statusDiv) return;

  const status = transacoes.map(({ status }) => status);
  const total = countBy(status);

  Object.keys(total).forEach((key) => {
    statusDiv.innerHTML += `<p>${key}: <span>${total[key]}</span></p>`;
  });
}

const diaDaSemana = {
  "0": "Domingo",
  "1": "Segunda",
  "2": "Terça",
  "3": "Quarta",
  "4": "Quinta",
  "5": "Sexta",
  "6": "Sábado",
};

function somaPorData(transacoes: Transacao[]): void {
  const dataDiv = document.querySelector("#data");

  if (!dataDiv) return;

  const data = transacoes.map(({ data }) => data.getDay());
  const total = countBy(data);

  Object.keys(total).forEach((key) => {
    dataDiv.innerHTML += `<p>${
      diaDaSemana[key as keyof typeof diaDaSemana]
    }: <span>${total[key]}</span></p>`;
  });
}

function diaMaisVendas(transacoes: Transacao[]): void {
  const diaDiv = document.querySelector("#dia");

  if (!diaDiv) return;

  const data = transacoes.map(({ data }) => data.getDay());
  const total = countBy(data);

  const diaMaisVendas = Object.entries(total).sort((a, b) => {
    return b[1] - a[1];
  })[0];
  console.log(diaMaisVendas);

  diaDiv.innerHTML += `<p>${
    diaDaSemana[diaMaisVendas[0] as keyof typeof diaDaSemana]
  }</p>`;
}

const transacoesNaoNormalizadas = await getDados<TransacaoNaoNormalizada[]>();
const transacoes = normalizaDados(transacoesNaoNormalizadas);
if (transacoes && Array.isArray(transacoes)) {
  preencheTabela(transacoes);
  somaTotal(transacoes);
  somaPorPagamento(transacoes);
  somaPorStatus(transacoes);
  somaPorData(transacoes);
  diaMaisVendas(transacoes);
}
