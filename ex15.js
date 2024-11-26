let anonasc = prompt("Digite o ano em que você nasceu:");

let anoAtual = new Date().getFullYear();

let anosVividos = anoAtual - anonasc;

let meses = anosVividos * 12;


let diasVividos = anosVividos * 365 + (mesesVividos % 12) * 30;

let mesesRestantes = Math.floor(diasVividos / 30) % 12;
let diasRestantes = diasVividos % 30;

console.log(`${anosVividos} anos, ${mesesRestantes} meses e ${diasRestantes} dias de vida.`);