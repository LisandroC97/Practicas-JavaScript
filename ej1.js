//Ej 1

/*let nombre="homero";
let apellido="simpson";
let edad="50";
console.log("nombre:"+nombre+"\n"+"apellido:"+apellido+"\n"+"edad:"+edad+"\n")

//Ej 2

const ciudadUno="Springfield";
const ciudadDos="Rosario";
const ciudadTres="Buenos Aires";
const ciudadCuatro="Cordoba";
const ciudadCinco="Mendoza";
console.log("ciudad 1:"+ciudadUno+"\n"+"ciudad 2:"+ciudadDos+"\n"+"ciudad 3:"+ciudadTres+"\n"+"ciudad 4:"+ciudadCuatro+"\n"+"ciudad 5:"+ciudadCinco+"\n")
*/
//Ej 3

/*let nombre=prompt("ingresar nombre:");
let apellido=prompt("ingresar apellido:");
let edad=prompt("ingresar edad:");

let carnet= "nombre:"+nombre+" "+"apellido:"+apellido+" "+"edad:"+edad+" ";
console.log(carnet);
*/



//-----------------------------------------------------------------------Tanda 2-------------------------------------------------------------------------------//

//Ej 1
/*
let nombre="bart";
let ingreso=prompt("Ingresar nombre: \n");
ingreso=ingreso.toLowerCase();
if (nombre==ingreso){
    alert("Fui yo");}
    else{
    alert("Yo no fui");
    }
console.log("nombre: "+nombre+"\n"+"ingreso: "+ingreso);
*/

//Ej 2
/*
let ingreso=prompt("Presionar 'Y':\n");
ingreso=ingreso.toLowerCase();
if(ingreso=="y"){
    alert("Correcto");
}
else
    {
    alert("Error");
    }

*/

//Ej 3

/*
let seleccion=prompt("Seleccionar Personaje:\n");
switch(seleccion)
    {
        case '1':
            alert("Seleccionó a 1");
            break;
        case '2':
            alert("Seleccionó a 2");
            break;
        case '3':
            alert("Seleccionó a 3");
            break;
        case '4':
            alert("Seleccionó a 4");
            break;
    }   

*/

//Ej4
/*
let presupuesto=prompt("Ingresar presupuesto estimado:\n");
if(presupuesto <=1000)
    {
            alert("presupuesto bajo");
    }
if(presupuesto>1000 && presupuesto<=3000)
    {
            alert("presupuesto medio");
    }
if(presupuesto >3000)
    {
        alert("presupuesto alto");
    }
*/

//Ej 5
/*

let productoA=prompt("Ingresar primer producto:\n").toLowerCase();
let productoB=prompt("Ingresar segundo producto:\n").toLowerCase();
let productoC=prompt("Ingresar tercer producto:\n").toLowerCase();
let productoD=prompt("Ingresar cuarto producto:\n").toLowerCase();
if(productoA!='' && productoB!='' && productoC!='' && productoD!='')
    {
        alert("Productos cargados correctamente");
    }  
else
    {
        alert("Error: faltan cargar productos");
    }
console.log("Producto 1: "+productoA+"\n"+"Producto 2: "+productoB+"\n"+"Producto 3: "+productoC+"\n"+"Producto 4: "+productoD+"\n")