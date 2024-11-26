
let alturaFrancisco = 1.50;  
let alturaSara = 1.10;      
let anos = 0;              

while (alturaFrancisco <= alturaSara) {

  alturaFrancisco += 0.02; 
  alturaSara += 0.03;     

  anos++;

console.log(`Será necessário ${anos} anos para que Francisco seja maior que Sara.`);

}