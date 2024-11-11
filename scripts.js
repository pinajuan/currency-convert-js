const amount = document.getElementById("amount")

// Manipulando o input amount para receber apenas números
amount.addEventListener("input", () => {
  console.log(amount.value)
})