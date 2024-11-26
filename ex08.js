num1 = Number(prompt('Insira um número:'));
num2 = Number(prompt('Insira um número:'));
num3 = Number(prompt('Insira um número:'));
const ordem = [num1, num2, num3];
console.log(ordem.sort(function(a, b){return a - b}));