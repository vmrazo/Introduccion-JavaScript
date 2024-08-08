//Arrays

const numeros = [10,20,30,40,50];





//const arreglo = ["Hola", 10, true, "si", null, {nombre: "Juan", trabajo: "Programador"}, [1,2,3]];

//console.log(arreglo);


//acceder a los valores del arreglo
//console.log(numeros[4]);
//console.log(numeros[2]);

//Conocer la extension de un arreglo

//console.log(meses.length);

//numeros.forEach (function (numero){
//    console.log(numero);
//});

//Agregar valores a los arreglos
numeros.push(60,70,80);//Agrega datos al final del arreglo

numeros.unshift(-10,-20,-30);//Agrega datos al inicio del arreglo



console.table(numeros);

//Eliminar elementos
const meses = ['Enero','Febrero','Marzo','Abril', 'Mayo'];

//meses.pop();//Elimina el último elemento
//meses.shift();//Elimina el primer elemento

meses.splice(2, 1);//Elimina de elementos de forma selectiva
console.table(meses);

//Rest operator o spread operator

const nuevoArreglo = [...meses,"Junio"];//Agregar datos al arreglo puede ser al principio o al final
console.log(nuevoArreglo);