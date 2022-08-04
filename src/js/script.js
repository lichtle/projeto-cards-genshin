/* Objetivo 1: quando clicar na seta de avançar, o card seguinte deve sobrepor o card atual
      Passo 1: pegar o elemento HTML da seta avançar;
      Passo 2: identificar o clique do usuário na seta;
      Passo 3: fazer aparecer o próximo card da lista;
      Passo 4: buscar o card selecionado e escondê-lo

Objetivo 2: Quando clicar na seta de voltar, o card anterior deve sobrepor o card atual 
      Passo 1: pegar o elemento HTML da seta voltar;
      Passo 2: identificar o clique do usuário na seta;
      Passo 3: fazer aparecer o card anterior da lista;
      Passo 4: buscar o card selecionado e escondê-lo */

const avancar = document.getElementById("avancar"); // Pegando a seta de avançar (atribuímos a ela um id 'avancar' no documento HTML para que pudéssemos usar o método getElementById)

const cards = document.querySelectorAll(".card"); // O método querySelectorAll busca todos os elementos que têm a classe 'card'. Sendo assim, a classe cards corresponde a todos os elementos que têm a classe 'card'

let cardAtual = 0; // Variável cardAtual definindo por qual posição começar a percorrer o array de li (personagens). Nesse caso, começa na primeira posição (índice 0)

function esconderCardSelecionado() {
  // Função para remover a classe 'selecionado' do card atual. Essa função fez parte da refatoração do código, para não termos que repetir as mesmas instruções todas as vezes. Agora basta chamar a função, que ocupa uma pequena linha, que ela executará todas as instruções

  const cardSelecionado = document.querySelector(".selecionado");
  cardSelecionado.classList.remove("selecionado");
}

function mostrarCard(indiceCard){
  // Função que adiciona a classe 'selecionado' ao elemento de classe 'card' atual
  cards[cardAtual].classList.add("selecionado");
} 

avancar.addEventListener("click", function () {
  // Adicionando um escutador de eventos na seta de avançar. Quando clicarmos na seta, uma função será executada

  if (cardAtual === cards.length - 1) return; // Cláusula de guarda para parar a execução do código quando o cartão atual for o último cartão. Isso serve para não executar código desnecessário

  esconderCardSelecionado(); // Chamando a função que remove a classe 'selecionado' do card atual

  cardAtual++; // Define em quanto a variável cardAtual será acrescida cada vez que a ação de clique for executada. Nesse caso, inicialmente ela corresponde a 0 e é acrescida em 1 a cada clique

  mostrarCard(cardAtual); // Chamando a função que adiciona a classe 'selecionado' ao card com a posição atual
});

// SETA DE VOLTAR

voltar.addEventListener("click", function () {
  // Adicionando um escutador de eventos na seta de voltar. Quando clicarmos na seta, uma função será executada

  if (cardAtual === 0) return; // Cláusula de guarda para parar a execução do código quando o cartão atual for o primeiro cartão. No caso de funções que decrescem isso serve para não bugar o código, já que não existe posição (índice) -1

  esconderCardSelecionado(); // Chamando a função que remove a classe 'selecionado' do card atual

  cardAtual--; // Define em quanto a variável cardAtual será decrescida cada vez que a ação de clique for executada. Nesse caso, inicialmente ela corresponde a 0 e é decrescida em 1 a cada clique

  mostrarCard(cardAtual); // Chamando a função que adiciona a classe 'selecionado' ao card com a posição atual
});