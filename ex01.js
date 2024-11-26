let A, B, C, soma;
A = Number(prompt("Insira um valor para A:"));
B = Number(prompt("Insira um valor para B:"));
C = Number(prompt("Insira um valor para C:"));

soma = A + B;
console.log(soma);

if(soma < C){
    console.log("A soma de A e B é menor que C.");
}

else{
    console.log("A soma de A e B é maior que C");
}