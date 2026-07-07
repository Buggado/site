const   carros = ["Ferrari", "Lamborghini", "Porsche", "Bugatti", "McLaren"];

const conteudo = document.getElementById("conteudo");

let dadosCarros = "";

let i = 0;

// Loop through the carros array and create a list item for each car
while (i < carros.length) {
  dadosCarros += `<li>${carros[i]}</li>`;
  i++;
}

conteudo.innerHTML = `<ul>${dadosCarros}</ul>`;