import { isTransacaoNaoNormalizada } from "./helpers/isInterface.js";
import stringParaNumber from "./helpers/stringParaNumber.js";
import stringParaDate from "./helpers/stringParaDate.js";
async function getDados() {
    try {
        const response = await fetch("https://api.origamid.dev/json/transacoes.json");
        if (!response.ok)
            throw new Error("Erro " + response.status);
        const json = await response.json();
        return json;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}
function normalizaDados(dados) {
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
function preencheTabela(transacoes) {
    const tabela = document.querySelector("#transacoes tbody");
    if (!tabela)
        return;
    transacoes.forEach((transacao) => {
        tabela.innerHTML += `
      <tr>
        <td>${transacao.nome}</td>
        <td>${transacao.email}</td>
        <td>R$ ${transacao.valor}</td>
        <td>${transacao.formaDePagamento}</td>
        <td>${transacao.status}</td>
      </tr>
    `;
    });
}
const transacoesNaoNormalizadas = await getDados();
const transacoes = normalizaDados(transacoesNaoNormalizadas);
if (transacoes && Array.isArray(transacoes)) {
    preencheTabela(transacoes);
}
//# sourceMappingURL=exercicio13.js.map