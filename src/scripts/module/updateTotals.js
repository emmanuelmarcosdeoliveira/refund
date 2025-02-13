export function UpdateTotal() {
  const expenseQuantity = document.querySelector("aside header p span");
  const expenseList = document.querySelector("ul");
  console.log(expenseList);
  try {
    const itens = expenseList.children;
    expenseQuantity.textContent = `${itens.length} ${
      itens.length > 1 ? "despesas" : "despesa"
    }`;
    console.log(itens);
  } catch (error) {
    console.log(error);
    alert("Erro");
  }
}
