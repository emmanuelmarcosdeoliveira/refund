export function formClear() {
  const expense = document.getElementById("expense");
  const category = document.getElementById("category");
  const amount = document.getElementById("amount");
  expense.value = "";
  category.value = "";
  amount.value = "";
  expense.focus();
}
