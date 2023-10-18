export default function numberParaString(valor: number): string {
  const numero = valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
  return numero;
}
