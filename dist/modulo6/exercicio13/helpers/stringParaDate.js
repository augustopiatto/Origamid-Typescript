export default function stringParaDate(valor) {
    const [data, tempo] = valor.split(" ");
    const [dia, mes, ano] = data.split("/").map(Number);
    const [hora, minuto] = tempo.split(":").map(Number);
    const dataFormatada = new Date(ano, mes - 1, dia, hora, minuto);
    return dataFormatada;
}
//# sourceMappingURL=stringParaDate.js.map