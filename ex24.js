let tempoViagem = parseFloat(prompt("Digite o tempo da viagem em horas:"));
let velocidadeMedia = parseFloat(prompt("Digite a velocidade média durante a viagem em km/h:"));

let distanciaPercorrida = tempoViagem * velocidadeMedia;

let litrosConsumidos = distanciaPercorrida / 12; 

console.log(`Distância percorrida: ${distanciaPercorrida.toFixed(2)} km`);
console.log(`Quantidade de litros de combustível utilizados: ${litrosConsumidos.toFixed(2)} litros`);