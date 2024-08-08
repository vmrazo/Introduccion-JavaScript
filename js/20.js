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

//For each
 carrito.forEach(productos =>{
     console.log(productos.nombre)
 });

 //Map

const arreglo = carrito.map(producto=>`${producto.nombre} - ${producto.precio}`);

console.log(arreglo);