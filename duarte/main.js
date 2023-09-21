//Variaveis
let divPrincipal = document.getElementById("principal");
let h1 = document.createElement("h1");
let h2 = document.createElement("h2");
let p = document.createElement("p");


//Adiciona os textos aos elementos
h1.innerText = "Bem vindo ao JS"
h2.innerText = "Criando elementos de forma dinâmica"
p.innerText = "Esse é um exemplo clássicode geração de HTML com Javascript"


//Cria os filhos
divPrincipal.appendChild(h1);
divPrincipal.appendChild(h2);
divPrincipal.appendChild(p);


//Adiciona as classes
h1.classList.add("tituloPrincipal");
h2.classList.add("tituloSec");
p.classList.add("texto")