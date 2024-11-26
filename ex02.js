let num;
num = Number(prompt("Insira um valor:"));

if(num % 2 == 0 && num > 0)
{
    console.log("Este número é positivo e par.")
}

if(num % 2 !== 0 && num > 0)
{
    console.log("Este número é positivo e ímpar.")
}

if(num % 2 == 0 && num < 0)
{
    console.log("Este número é par e negativo.")
}
if(num % 2 !== 0 && num < 0){
    console.log("Este número é impar e negativo.")
}