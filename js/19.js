
//for (let i=1; i <= 10; i++){
//    if (i % 2 === 0){
//            console.log(`El número ${i} es par`)
 //   }else{
 //       console.log(`El número ${i} es impar`)
 //   }
//}


const carrito =[
    {nombre: 'Monitor 20 pulgadas', precio:500},
    {nombre: 'Television 50 Pulgadas', precio:700},
    {nombre: 'Tablet', precio:300},
    {nombre: 'Audifonos', precio:200},
    {nombre: 'Teclado', precio:50},
    {nombre: 'Celular', precio:500},
    {nombre: 'Bocinas', precio:300},
    {nombre: 'Laptop', precio:800},
];

for (let i=0; i< carrito.length; i++){
    console.log(carrito[i].nombre);
}

//While

let i=0;

//while (i<10){
//    if (i % 2 === 0) {
//        console.log(`El número ${i} es par`)
//    }
//    i++;
//}
//while (i<carrito.length){

//        console.log(carrito[i].nombre)

//    i++;
//}

do {
    console.log(i)
    i++;
}while (i<10)