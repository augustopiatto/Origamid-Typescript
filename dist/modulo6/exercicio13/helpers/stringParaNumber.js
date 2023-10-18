export default function stringParaNumber(valor) {
    const numero = Number(valor.replaceAll(".", "").replace(",", "."));
    if (isNaN(numero)) {
        return null;
    }
    return numero;
}
//# sourceMappingURL=stringParaNumber.js.map