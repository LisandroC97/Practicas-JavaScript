let cadena='';

while(true)
{   ingreso=prompt("Ingresar palabra");
    if (ingreso != 'ESC'){
    cadena=cadena +" "+ ingreso;
    console.log(cadena);
    }
    else
    break
}