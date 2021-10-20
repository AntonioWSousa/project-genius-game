let order = [];
let clickOrder = 0;
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
  order(order.length) = colorOrder;
  clickOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1)
  }
}

//fim da função para criar ordem aletoria de cores

//início da função para acender a próxima cor
let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add("selected");
  }, number - 250);
  setTimeout(() => {
    element.classList.remove("selected");
  });
};

//fim da função para acender a próxima cor

//início da função para checar se os botões clicados são os mesmo da ordem gerada 
let check = () => {
  for (let i in clickOrder) {
    if (clickOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clickOrder.length == order.length) {
    alert('Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!');
    nextLevel();
  }
}
//fim da função para checar se os botões clicados são os mesmo da ordem gerada

//início da função para o clique do usuário
let click = (color) => {
  clickOrder[clickOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
  })
}
//fim da função para o clique do usuário

//início da função que retorna a cor
let createColorElement = (color) => {
  if (color == 0) {
    return green;
  }
  else if (color == 1) {
    return red;
  }
  else if (color == 2) {
    return yellow;
  }
  else if (color == 3) {
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

//início da função para game over
let gameOver = () => {
  alert('Pontuação: ${score}\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo!');
  order = [];
  clickOrder = [];

  playGame();
}

//início da função para iniciar o jogo
let playGame = () => {
  alert('Bem vindo ao jogo Sequência! Iniciando novo jogo!');

  nextLevel();
}





