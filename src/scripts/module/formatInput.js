export default function formatInput() {
  const amount = document.getElementById("amount");
  // Capturando o valor de input e formatando apenas para números através do Regex
  amount.oninput = () => {
    let value = amount.value.replace(/\D/g, "");
    // Transformar o valor em centavos
    value = Number(value) / 100;
    // Atualizar o valor do input
    amount.value = formatCurrencyBRL(value);
  };
  function formatCurrencyBRL(value) {
    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    // Abaixo estamos retornando o valor formatado de acordo com nossa moeda
    return value;
  }
}
