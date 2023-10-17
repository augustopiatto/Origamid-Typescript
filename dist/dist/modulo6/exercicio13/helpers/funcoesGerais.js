export function camelize(valor) {
    const valorCamelzado = valor
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 || index === 1
            ? word.toLowerCase()
            : word.toUpperCase();
    })
        .replace(/\s+/g, "")
        .split("(")[0];
    return valorCamelzado;
}
//# sourceMappingURL=funcoesGerais.js.map