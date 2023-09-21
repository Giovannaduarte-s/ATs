const alunos = [];

for(let i=0; i< 10; i++){
    const aluno = {};

    aluno.nome = prompt('Informe o nome do aluno ${i+1}:');
    aluno.email = prompt('Informe o email do aluno ${i+1}:');
    aluno.materiaFavorita = prompt('Informe o nome do aluno ${i+1}:');

    alunos.push(aluno);
}

const principal = document.getElementById('principal');

alunos.forEach((aluno, index) => {
const card = document.createElement('h1');
card.classList.add('card');

const h1 = document.createElement('h1');
const h2 = document.createElement('h2');
const p = document.createElement('p');

h1.textContent = aluno.nome;
h2.textContent = aluno.email;
p.textContent = aluno.materiaFavorita;

card.appendChild(h1);
card.appendChild(h2);
card.appendChild(p);

principal.appendChild(card);
});