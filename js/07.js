//"use strict"; // Correr JS en modo estricto

//Objetos

const producto={
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible: true
}

Object.seal(producto);//:freeze no permite hacer ningun tipo de modificación al abjeto, .seal permite solo modificar los valores

producto.precio='Nuevo Precio';

delete producto.precio;

console.log(producto);
