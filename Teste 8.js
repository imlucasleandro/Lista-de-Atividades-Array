// 1. Retorna um novo array contendo apenas os números pares do array original.
// Definindo o array original
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Filtrando apenas os números pares
const numerosPares = numeros.filter(numero => numero % 2 === 0);

// Exibindo o novo array com os números pares
console.log(numerosPares); // retorna [2, 4, 6, 8]

//3. Retorna um objeto contendo a quantidade de ocorrências de cada string no array.
// Definindo o array com as strings
const strings = ['maçã', 'banana', 'maçã', 'abacaxi', 'banana', 'abacaxi', 'abacaxi'];

// Criando o objeto de ocorrências
const ocorrencias = strings.reduce((acc, string) => {
  if (acc[string]) {
    acc[string] += 1;
  } else {
    acc[string] = 1;
  }
  return acc;
}, {});

// Exibindo o objeto de ocorrências
console.log(ocorrencias); // retorna { maçã: 2, banana: 2, abacaxi: 3 }

//4. Retorna um objeto contendo a soma total, a média e o desvio padrão dos elementos do array.
// Definindo o array com os elementos
const elementos = [10, 20, 30, 40, 50];

// Calculando a soma total dos elementos
const soma = elementos.reduce((acc, elemento) => acc + elemento);

// Calculando a média dos elementos
const media = soma / elementos.length;

// Calculando a soma dos quadrados das diferenças entre os elementos e a média
const somaQuadradosDiferencas = elementos.map(elemento => (elemento - media) ** 2)
                                           .reduce((acc, quadrado) => acc + quadrado);

// Calculando o desvio padrão dos elementos
const desvioPadrao = Math.sqrt(somaQuadradosDiferencas / elementos.length);

// Criando o objeto com as informações
const informacoes = { soma: soma, media: media, desvioPadrao: desvioPadrao };

// Exibindo o objeto com as informações
console.log(informacoes); // retorna { soma: 150, media: 30, desvioPadrao: 15.811388300841896 }



