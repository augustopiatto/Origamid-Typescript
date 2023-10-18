export default function stringParaNumber(valor: string): number | null {
  const numero = Number(valor.replaceAll(".", "").replace(",", "."));
  if (isNaN(numero)) {
    return null;
  }
  return numero;
}
