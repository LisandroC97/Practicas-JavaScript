//Este script es un conversor de números decimales a binarios. Probablemente lo utilice como función más adelante
let decimal=prompt("Ingresar el número en formato decimal: ");
decimal=parseInt(decimal);
let resto=0;
resto=parseInt(resto);
let binario=[];

while(decimal>1)
    {
    resto=decimal % 2;
    console.log(resto);
    binario.push(resto);
    decimal=Math.floor(decimal/2);
    
    }
if(decimal<2)
    {console.log(resto);
    binario.push(resto);}
//En este punto ya tengo almacenados los bits representativos del número, pero el array se encuentra invertido
    {console.log(binario.reverse())}