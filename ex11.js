
let Produto = Number(prompt("Insira o valor do produto:"));
let Pagamento = Number(prompt("Escolha a forma de pagamento:\n1 - À Vista em Dinheiro ou Pix\n2 - À Vista no cartão de crédito\n3 - Parcelado no cartão em 2 vezes\n4 - Parcelado no cartão em 3 vezes ou mais"));


let valor;

switch (Pagamento) {
    case 1:

        valor = Produto * 0.85; 
        console.log("Você escolheu pagar à vista em Dinheiro ou Pix.");
        console.log("Valor final com 15% de desconto: R$", valor.toFixed(2));
        break;
    
    case 2:

        valor = Produto * 0.90; 
        console.log("Você escolheu pagar à vista no cartão de crédito.");
        console.log("Valor final com 10% de desconto: R$", valor.toFixed(2));
        break;
    
    case 3:
    
        valor = Produto; 
        console.log("Você escolheu parcelar em 2 vezes no cartão.");
        console.log("Valor final sem juros: R$", valor.toFixed(2));
        break;
    
    case 4:
     
        valor = Produto * 1.10; 
        console.log("Você escolheu parcelar no cartão em 3 vezes ou mais.");
        console.log("Valor final com 10% de juros: R$", valor.toFixed(2));
        break;

    default:
        console.log("Opção de pagamento inválida.");
        break;
}
