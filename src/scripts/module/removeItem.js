import { UpdateTotal } from "./updateTotals.js";

export function removeItem() {
  const expenseList = document.querySelector("ul");
  // Captura o evento de click
  expenseList.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-icon")) {
      // Obtém a li pai do  elemento clicado
      const item = e.target.closest(".expense");
      // Remove o item da lista
      item.remove();
    }
    // Atualiza os totais
    UpdateTotal();
  });
}
