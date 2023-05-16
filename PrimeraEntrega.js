//Calculadora de valor del carrito de compras.
//Para este ejercicio planteo 4 items disponibles a modo de ejemplo.

//---------------------------------------------------------------------------Declaración de variables---------------------------------------------------------------
let itemA=0;
let precioA=5;
let itemB=0;
let precioB=2;
let itemC=0;
let precioC=4;
let itemD=0;
let precioD=6;
let compra='';
let fin=0;
let total=0;
let cuotas=0;
let metodo='';

//----------------------------------------------------------------------------Funciones----------------------------------------------------------------------------
//Función recargo
const recargo=(cuotas) => {
    switch (cuotas)
    {
    case '1':
        total=(itemA*precioA+itemB*precioB+itemC*precioC+itemD*precioD)*(1.05);
        break;
    case '3':
        total=(itemA*precioA+itemB*precioB+itemC*precioC+itemD*precioD)*(1.15);
        break;
    case '6':
        total=(itemA*precioA+itemB*precioB+itemC*precioC+itemD*precioD)*(1.45);
        break;
    case '12':
        total=(itemA*precioA+itemB*precioB+itemC*precioC+itemD*precioD)*(1.95);
        break;
    }
    return total;
    }
//----------------------------------------------------------------Script------------------------------------------------------------------------
    //"fin" ya está inicializada en 0 en la definición de variables y entrará directamente al primer ciclo de selección de productos
    while(fin==0)
        {  
    //Solicito selección de producto por primera vez y lo paso a minúscula para evitar errores
    compra=prompt('Ingresar producto o si desea terminar la compra escribir fin').toLowerCase();
    //Verifico el ingreso correcto
    while(compra != 'a' && compra !='b' && compra !='c' && compra !='d' && compra !='fin')
        {   alert("disculpe, ingreso incorrecto. Vuelva a seleccionar producto");
            compra=prompt('Ingresar producto o si desea escribir ingresar fin').toLowerCase();    
        }
    //Si se seleccionó correctamente, aumento la cantidad de items en carrito o termino con la etapa de selección.
    switch (compra)
        {
        case 'a':
            itemA=itemA+prompt('Cuántos desea llevar?:');
            break;
        case 'b':
            itemB=itemB+prompt('Cuántos desea llevar?:');
            break;
        case 'c':
            itemC=itemC+prompt('Cuántos desea llevar?:');
            break;
        case 'd':
            itemD=itemD+prompt('Cuántos desea llevar?:');
            break;
        case 'fin':
            fin=1;
            break;
        }

        }
 //solicito el método de pago
 metodo=prompt('Ingrear método de pago, sea débito/transferencia o cuotas').toLowerCase();
 total=itemA*precioA+itemB*precioB+itemC*precioC+itemD*precioD;
 //Verifico que no se haya ingresado un valor erróneo
    while(metodo !='debito' && metodo !='transferencia' && metodo!='cuotas')
        {
            alert('Ingreso incorrecto. Por favor, vuelva a seleccionar método de pago');
            metodo=prompt('Ingrear método de pago, sea débito/transferencia o cuotas').toLowerCase();
        }
    //imaginemos que en débito y transferencia no hay descuentos ni recargos
    if(metodo=='debito' || metodo=='transferencia')
        alert('el total a pagar es:'+total);
    //Si el método seleccionado es crédito, doy a elegir entre 1, 3, 6 y 12 cuotas.
    if(metodo=='cuotas')
        {
        cuotas=prompt('Desea pagar en 1, 3, 6 o 12 cuotas?:');
        //Utilizo la función recargo con la cantidad de cuotas seleccionadas como argumento
        total=recargo(cuotas);
        alert ('El total a pagar es: $'+total);
        }

    //Con esta línea verifico por consola el correcto funcionamiento del script y el uso de las variables
console.log('cantidad de A:'+itemA+'\n'+'cantidad de B:'+itemB+'\n'+'cantidad de C:'+itemC+'\n'+'cantidad de D:'+itemD+'\n'+'metodo de pago:'+metodo+'\n'+'cantidad de cuotas:'+cuotas+'\n'+'total: $'+total)