// Obtendo os elementos
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

// Manipulando o input amount para receber apenas números
amount.addEventListener("input", () => {
  const hasCharacterRegex = /\D+/g
  amount.value = amount.value.replace(hasCharacterRegex, "")
})

// Captando o evento de submit do form
form.onsubmit = (event) => {
  event.preventDefault()
  console.log(currency.value)
}