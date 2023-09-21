function obterDataAtual() {
   const data = new Date();
   const hora = data.getHours();

   const saudacaoElement = document.getElementById("saudacao");

   if (hora >= 6 && hora < 12) {
     saudacaoElement.textContent = "Bom dia!";
 }   else if (hora === 12) {
     saudacaoElement.textContent = "Hora do Almoço!";
 }   else if (hora >= 13 && hora <= 17) {
     saudacaoElement.textContent = "Boa tarde!";
 }   else if (hora >= 18 && hora <= 23) {
     saudacaoElement.textContent = "Boa noite!";
 }   else if (hora===0) {
     saudacaoElement.textContent = "Não disse que ia dormir mais cedo hoje?";
 }   else if (hora >= 1 && hora <= 5) {
     saudacaoElement.textContent = "Não está na Netflix, está?";
 }
}  

obterDataAtual();