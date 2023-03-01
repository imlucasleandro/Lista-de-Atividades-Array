// Lendo o vetor com os números sorteados
const numerosSorteados = [3,8,15,22,25,30];

// Lendo o vetor com a aposta do apostador
const apostaApostador = [2,9,15,30,45,51];

// Verificando os acertos do apostador
let acertos = 0;
for (let i = 0; i < 6; i++) {
  if (numerosSorteados.includes(apostaApostador[i])) {
    acertos++;
  }
}
// Exibindo o número de acertos do apostador
console.log(`O apostador acertou ${acertos} números.`);
