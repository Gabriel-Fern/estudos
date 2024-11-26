let altura, peso, imc
altura = Number(prompt("Insira sua altura:"));
peso = Number(prompt("Insira seu peso:"));
imc = peso / (altura * altura);

if(imc < 18.5){
    console.log("Você está abaixo do peso.");
}
if (imc >= 18.6 && imc <= 24.9){
    console.log("Parabéns você está no seu peso ideal!!");
}
if (imc >= 25 && imc <= 29.9){
    console.log("Levemente acima do peso.");
}
if(imc >= 30 && imc <= 34.9){
    console.log("Obesidade grau I");
}
if(imc >= 35 && imc <= 39.9){
    console.log("Obesidade grau II(severa).");
}
if(imc >= 40){
    console.log("Obesidade grau III(mórbida)");
}
    