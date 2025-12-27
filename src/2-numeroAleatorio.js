/*
creamos un proyecto donde genere numeros aleatorios tomando los datos de la terminal pero si no se le paso los datos tendremos por defecto el valor minimo 1 y el maximo 100
*/

const argumentos = process.argv;
const args = argumentos.slice(2);
console.log(args);
// valores por defecto

let min = 1;
let max = 100;

//vereficar si los datos del argumento son correctos

if (args.length === 2) {
  //cambiar el tipo de dato a numero
  const argMin = parseInt(args[0]);
  const argMax = parseInt(args[1]);
  //quiero preguntar si minarg es un numero
  if (!isNaN(argMin) && !isNaN(argMax) && argMin < argMax) {
    min = argMin;
    max = argMax;
  } else {
    console.log(
      "Valores fuera del rango, se usaran los valores por defeceto (1-100)"
    );
  }

}
const aleatorio = Math.floor(Math.random() * (max - min) + min);
console.log(`El numero aleatorio es: ${aleatorio}, el rango tomado es ${min} y ${max}`);
