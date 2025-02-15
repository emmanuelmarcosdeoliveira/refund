import { formClear } from "./formClear.js";

export function UpdateTotal() {
  const expenseQuantity = document.querySelector("aside header p span");
  const expenseList = document.querySelector("ul");
  const expensesTotal = document.querySelector("aside header h2");

  function formatCurrencyBRL(value) {
    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    // Abaixo estamos retornando o valor formatado de acordo com nossa moeda
    return value;
  }
  try {
    const items = expenseList.children;
    expenseQuantity.textContent = `${items.length} ${
      items.length > 1 ? "despesas" : "despesa"
    }`;
    // Variável para incrementar o total
    let total = 0;
    // Percorre os itens da list
    for (let item = 0; item < items.length; item++) {
      const itemAmount = items[item].querySelector(".expense-amount");
      let value = itemAmount.textContent
        .replace(/[^\d,]/g, "")
        .replace(",", ".");
      // convert o valor para float
      value = parseFloat(value);
      // Verificar se é um numero valido
      if (isNaN(value)) {
        return alert(
          "Não foi possível fazer o calculo do total o valor não parece um  número"
        );
      }
      // Incrementa o valor total
      total += Number(value);
    }
    // Adiciona a span
    const symbolBRL = document.createElement("small");
    symbolBRL.textContent = "R$";

    total = formatCurrencyBRL(total).toUpperCase().replace("R$", "");
    expensesTotal.innerHTML = "";
    expensesTotal.append(symbolBRL, total);
    formClear();
  } catch (error) {
    alert("Erro ao calcular o total");
  }
}
