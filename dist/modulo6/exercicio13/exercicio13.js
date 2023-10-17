import { isTransacao, isTransacaoNaoNormalizada, } from "./helpers/isInterface.js";
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
                    data: dado.Data,
                    nome: dado.Nome,
                    formaDePagamento: dado["Forma de Pagamento"],
                    email: dado.Email,
                    valor: dado["Valor (R$)"],
                    clienteNovo: Boolean(dado["Cliente Novo"]),
                };
            }
            throw new Error("Não é transação");
        });
    }
    return dadosNormalizados;
}
const transacoesNaoNormalizadas = await getDados();
const transacoes = normalizaDados(transacoesNaoNormalizadas);
if (transacoes && Array.isArray(transacoes)) {
    transacoes.forEach((transacao) => {
        if (isTransacao(transacao)) {
            document.body.innerHTML += `<p>${transacao.data}</p>`;
        }
    });
}
//# sourceMappingURL=exercicio13.js.map