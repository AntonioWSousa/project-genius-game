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