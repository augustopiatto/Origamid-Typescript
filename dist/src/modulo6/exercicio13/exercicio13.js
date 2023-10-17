import { camelize } from "../../../dist/modulo6/exercicio13/helpers/funcoesGerais.js";
import { isTransacaoNaoNormalizada } from "../../../dist/modulo6/exercicio13/helpers/isInterface.js";
async function getDados() {
    const response = await fetch("https://api.origamid.dev/json/transacoes.json");
    const json = await response.json();
    normalizaDados(json);
}
getDados();
function normalizaDados(dados) {
    if (dados && Array.isArray(dados)) {
        const dadosNormalizados = dados.map((dado) => {
            if (isTransacaoNaoNormalizada(dado)) {
                return Object.keys(dado).forEach((key) => {
                    const chaveNormalizada = camelize(key);
                    return { [chaveNormalizada]: dado[key] };
                });
            }
            return null;
        });
        console.log(dadosNormalizados);
    }
    return null;
}
//# sourceMappingURL=exercicio13.js.map