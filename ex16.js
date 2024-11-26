
let lado1 = parseFloat(prompt("Digite o comprimento do primeiro lado:"));
let lado2 = parseFloat(prompt("Digite o comprimento do segundo lado:"));
let lado3 = parseFloat(prompt("Digite o comprimento do terceiro lado:"));

if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
  console.log("Os lados do triângulo devem ser maiores que zero.");
} else if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
  if (lado1 === lado2 && lado2 === lado3) {
    console.log("O triângulo é equilátero.");
  } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
    console.log("O triângulo é isósceles.");
  } else {
    console.log("O triângulo é escaleno.");
  }
} else {
  console.log("Os valores fornecidos não formam um triângulo válido.");
}
