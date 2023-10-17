export function isTransacaoNaoNormalizada(value) {
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
//# sourceMappingURL=isInterface.js.map