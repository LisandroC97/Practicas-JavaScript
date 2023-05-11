//Este script es un conversor de números decimales a binarios. Probablemente lo utilice como función más adelante
let decimal=prompt("Ingresar el número en formato decimal: ");
let resto=0;
let binario=[];
if(decimal<2)
{console.log(decimal)}
while(decimal>1)
    {
    resto=decimal % 2;
    decimal=decimal/2;
    
        binario=binario.push(resto.parse)
    }
console.log(binario)