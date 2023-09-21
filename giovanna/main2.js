function leia() {
    var item1 = parseFloat(prompt("Digite o primeiro número: "));
    var item2 = parseFloat(prompt("Digite o segundo número: "));
    var item3 = parseFloat(prompt("Digite o terceiro número: "));
    var itens = [item1, item2, item3];
    return itens;
}

function soma(itens){
    let soma= itens[0] + itens[1] + itens[2];
    return soma;
}

function imprime(soma){
   console.log("Asoma é" +soma);

}

var itens= leia()
var soma= soma(itens);
imprime(soma);
