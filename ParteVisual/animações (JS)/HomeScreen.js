console.log("Olá, mundo!");

let nome = "Gustavo";
const idade = 17;

function saudacao() {
  console.log("Bem-vindo, " + nome + "!");
}

saudacao();

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

document.getElementById("meuBotao").addEventListener("click", function() {
  alert("Você clicou no botão!");
});
