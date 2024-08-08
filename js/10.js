
//Array methods
const meses = ['Enero','Febrero','Marzo','Abril', 'Mayo'];

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

//Foreach
meses.forEach(function (mes) {
    if (mes === 'Marzo') {
        console.log('Marzo si existe')
    }
});
//Includes

let resultado = meses.includes('Marzo');

//Some ideal para arreglo de objetos (regresa un boolean

resultado = carrito.some(function (producto){
    return producto.nombre === 'Celular';
});


//Reduce
resultado = carrito.reduce(function (total,producto){
    return total + producto.precio
}, 0);


//Filter (filtra los resultados segun la petición)
resultado = carrito.filter(function (producto){
    return producto.precio > 400
});

console.log(resultado);