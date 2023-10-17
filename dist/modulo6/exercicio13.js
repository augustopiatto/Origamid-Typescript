async function getDados() {
    const response = await fetch("https://api.origamid.dev/json/transacoes.json");
    const json = await response.json();
    normalizaDados(json);
}
getDados();
function isTransacaoNaoNormalizada(value) {
    if (value &&
        typeof value === "object" &&
        "Status" in value &&
        "ID" in value &&
        "Data" in value &&
        "Nome" in value &&
        "Forma de Pagamento" in value &&
        "Email" in value &&
        "Valor (R$)" in value &&
        "Cliente Novo" in value) {
        return true;
    }
    else {
        return false;
    }
}
function normalizaDados(dados) {
    if (dados && Array.isArray(dados)) {
        const dadosNormalizados = dados.map((dado) => {
            if (isTransacaoNaoNormalizada(dado)) {
                return Object.keys(dado).forEach((key) => {
                    const chaveNormalizada = key
                        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
                        return index === 0 || index === 1
                            ? word.toLowerCase()
                            : word.toUpperCase();
                    })
                        .replace(/\s+/g, "")
                        .split("(")[0];
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