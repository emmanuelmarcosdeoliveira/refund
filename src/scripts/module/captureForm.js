import { UpdateTotal } from "./updateTotals.js";

export function captureForms() {
  const expenseList = document.querySelector("ul");
  const form = document.querySelector("form");
  const expense = document.getElementById("expense");
  const category = document.getElementById("category");
  const amount = document.getElementById("amount");
  // Abaixo capturei o formulário e fiz defini um evento de prevent Default
  form.onsubmit = (e) => {
    e.preventDefault();
    // Abaixo criamos um objeto para poder captura os elementos do formulário
    const newExpense = {
      id: new Date().getTime(),
      expense: expense.value,
      category_id: category.value,
      category_name: category.options[category.selectedIndex].text,
      amount: amount.value,
      create_at: new Date(),
    };
    expenseAdd(newExpense);

    function expenseAdd() {
      try {
        // Cria elementos para adicionar na lista

        //Criando a li
        const expenseItem = document.createElement("li");
        // Adicionado a classe a li
        expenseItem.classList.add("expense");

        // Criando a imagem que representa as nossas categorias
        const expenseIcon = document.createElement("img");
        // Capturando a imagem do ícone de forma dinâmica
        expenseIcon.setAttribute(
          "src",
          `./src/assets/images/${newExpense.category_id}.svg`
        );
        expenseIcon.setAttribute("alt", newExpense.category_name);

        // Cria as descrição das despesas a informação
        const expenseInfo = document.createElement("div");
        expenseInfo.classList.add("expense-info");

        // Cria o nome da despesa
        const expenseName = document.createElement("strong");
        expenseName.textContent = newExpense.expense;

        // Criando a categoria da despesa
        const expenseCategory = document.createElement("span");
        expenseCategory.textContent = newExpense.category_name;

        // Adicionando name e categoria dentro de expense info
        expenseInfo.append(expenseName, expenseCategory);

        // Criando os elementos que compõem o valor da descrição
        const expenseAmount = document.createElement("span");
        expenseAmount.classList.add("expense-amount");
        expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount
          .toUpperCase()
          .replace("R$", "")}`;

        // Criando o ícone de remover Despesas
        const expenseRemove = document.createElement("img");
        expenseRemove.setAttribute("src", "./src/assets/images/remove.svg");
        expenseRemove.classList.add("remove-icon");
        expenseRemove.setAttribute("alt", "remover despesas");

        // Adicionando o ícone com seus atributos dentro da li
        expenseItem.append(
          expenseIcon,
          expenseInfo,
          expenseAmount,
          expenseRemove
        );
        // Adicionado a li dentro da ul
        expenseList.append(expenseItem);

        // chama a função externa que atualiza os totais
        UpdateTotal();
        sunTotalPrice();

        throw new Error("Erro de Execução");
      } catch (error) {}
    }
  };
}
