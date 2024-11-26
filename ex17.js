let fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));

let celsius = (fahrenheit - 32) * 5 / 9;

console.log(`A temperatura em Fahrenheit é: ${fahrenheit}°F`);
console.log(`A temperatura correspondente em Celsius é: ${celsius.toFixed(2)}°C`);