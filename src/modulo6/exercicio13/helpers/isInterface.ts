import { Transacao, TransacaoNaoNormalizada } from "./types";

export function isTransacao(value: unknown): value is Transacao {
  if (
    value &&
    typeof value === "object" &&
    "status" in value &&
    "id" in value &&
    "data" in value &&
    "nome" in value &&
    "formaDePagamento" in value &&
    "email" in value &&
    "valor" in value &&
    "clienteNovo" in value
  ) {
    return true;
  } else {
    return false;
  }
}

export function isTransacaoNaoNormalizada(
  value: unknown
): value is TransacaoNaoNormalizada {
  if (
    value &&
    typeof value === "object" &&
    "Status" in value &&
    "ID" in value &&
    "Data" in value &&
    "Nome" in value &&
    "Forma de Pagamento" in value &&
    "Email" in value &&
    "Valor (R$)" in value &&
    "Cliente Novo" in value
  ) {
    return true;
  } else {
    return false;
  }
}
