//ejercicio 1
var numero = parseInt(prompt ("Ingresa un numero de tres cifras"))
var centena = Math.floor(numero/100);//Devuelve el máximo entero menor o igual a un número.
var decena = Math.floor(numero%100)/10;
var unidad = Math.floor(numero%100)%10;
if (centena == unidad)
  console.log("El numero es CAPICUA");
else
  console.log("El numero NO ES CAPICUA");
  


///////////////////////////////////////////////////////////////////////
//ejercicio 2
function potencia(numero,exponente){
resultado=Math.pow(numero,exponente); //La función  Math.pow() devuelve la  base elevada al exponente , esto es, baseexponente
return resultado;
}
console.log(potencia(5,2));
//////////////////////////////////////////////////////////////////////


//ejercicio 4
var oracion=prompt("Ingrese una oración")
var array = oracion.split (" ");
for( i = 0, j = array.length; i < j; i++ ){  
  array[ i ] += j; 
}
console.log(array)

//ejercicio 5


//ejercicio 9
function voltearPalabr (x){
var palabra= x
var separar = palabra.split("");
var invertida = separar.reverse(); 
var nuevo =invertida.join();
  return nuevo
}
 
console.log (voltearPalabr("1234"))


            
