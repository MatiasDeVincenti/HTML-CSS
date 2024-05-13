//Ejercicio práctico:
//Dada una lista de números, escribe una función en JavaScript que devuelva la suma de todos los números pares en la lista. La función deberá iterar sobre cada número en la lista, comprobar si el número es par y, si es así, añadirlo a la suma total. Realizar una solución con for y una con while

const lista = [1, 2, 4, 5, 5, 6, 6, 7];

let suma = 0;
function sumarPares(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      suma += numeros[i];
    }
  }
  return suma;
}
sumarPares(lista);
