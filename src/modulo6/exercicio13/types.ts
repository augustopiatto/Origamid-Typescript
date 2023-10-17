export interface Transacao {
  status: string;
  id: number;
  data: string;
  nome: string;
  formaDePagamento: string;
  email: string;
  valor: string;
  clienteNovo: boolean;
}

export interface TransacaoNaoNormalizada {
  Status: string;
  ID: number;
  Data: string;
  Nome: string;
  ["Forma de Pagamento"]: string;
  Email: string;
  ["Valor (R$)"]: string;
  ["Cliente Novo"]: number;
}
