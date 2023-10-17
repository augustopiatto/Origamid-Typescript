async function getVendas() {
  const response = await fetch("https://api.origamid.dev/json/vendas.json");
  const json = await response.json();
  somaTotal(json);
  console.log(json);
}

getVendas();

interface ProdutoDetalhes {
  marca: string;
  cor: string;
}

type Venda = [string, number, string, ProdutoDetalhes];

function somaTotal(data: Venda[]) {
  const total = data.reduce((acc, cur) => {
    return acc + cur[1];
  }, 0);
  document.body.innerHTML += `<p>${total}</p>`;
}
