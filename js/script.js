let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//início da função para criar ordem aletoria de cores
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}
//fim da função para criar ordem aletoria de cores

//início da função para acender a próxima cor
let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, number - 250);
  setTimeout(() => {
    element.classList.remove('selected');
  });
}
//fim da função para acender a próxima cor

//início da função para checar se os botões clicados são os mesmo da ordem gerada 
let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
    nextLevel();
  }
}
//fim da função para checar se os botões clicados são os mesmo da ordem gerada

//início da função para o clique do jogador
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250);
}
//fim da função para o clique do jogador

//início da função que retorna a cor
let createColorElement = (color) => {
  if (color == 0) {
    return green;
  } else if (color == 1) {
    return red;
  } else if (color == 2) {
    return yellow;
  } else if (color == 3) {
    return blue;
  }
}
//fim da função que retorna a cor

//início da função que passa para o próximo nível do jogo
let nextLevel = () => {
  score++;
  shuffleOrder();
}
//fim da função que passa para o próximo nível do jogo

//início da função de game over
let gameOver = () => {
  alert(
    `Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`
  );
  order = [];
  clickedOrder = [];

  playGame();
}
//fim da função de game over

//início da função para iniciar o jogo
let playGame = () => {
  alert('Bem vindo ao jogo Sequência! Iniciando novo jogo!');
  score = 0;

  nextLevel();
}

//início dos geradores de eventos de cliques para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);
//fim dos geradores de eventos de cliques para as cores

//inicio do jogo
playGame();