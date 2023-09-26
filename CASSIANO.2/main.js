const botaoGerarDiv = document.getElementById("gerarDiv");
const container = document.getElementById("container");

function criarDiv() {
    // Obtém os valores dos campos do formulário
    const nome = document.getElementById("nome").value;
    const autor = document.getElementById("autor").value;
    const paginas = document.getElementById("paginas").value;
    const pais = document.getElementById("pais").value;

    // Cria uma nova div
    const divLivro = document.createElement("div");

    // Cria elementos para exibir as informações do livro
    const nomeLivro = document.createElement("h2");
    nomeLivro.textContent = "Nome do Livro: " + nome;

    const autorLivro = document.createElement("h3");
    autorLivro.textContent = "Autor(a): " + autor;

    const paginasLivro = document.createElement("p");
    paginasLivro.textContent = "Número de Páginas: " + paginas;

    const paisLivro = document.createElement("p");
    paisLivro.textContent = "País de Lançamento: " + pais;

    // Adiciona os elementos à div
    divLivro.appendChild(nomeLivro);
    divLivro.appendChild(autorLivro);
    divLivro.appendChild(paginasLivro);
    divLivro.appendChild(paisLivro);

    // Adiciona a div ao container
    container.appendChild(divLivro);
}

botaoGerarDiv.addEventListener("click", criarDiv);