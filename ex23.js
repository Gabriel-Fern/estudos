let valorHoraAula = parseFloat(prompt("Digite o valor da hora aula:"));
let numeroAulas = parseInt(prompt("Digite o número de aulas lecionadas no mês:"));
let percentualINSS = parseFloat(prompt("Digite o percentual de desconto do INSS (%):"));

let salarioBruto = valorHoraAula * numeroAulas;

let descontoINSS = (percentualINSS / 100) * salarioBruto;

let salarioLiquido = salarioBruto - descontoINSS;

console.log(`Salário bruto: R$ ${salarioBruto.toFixed(2)}`);
console.log(`Desconto INSS: R$ ${descontoINSS.toFixed(2)}`);
console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`);