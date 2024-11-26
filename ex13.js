let nome, idade;
nome = prompt("Insira seu nome:")
idade = Number(prompt("Insira sua idade:"))

if(idade < 18){
    console.log(nome, "infelizmente você é menor de idade")
}
else{
    console.log(nome,',Você é maior de idade')
}