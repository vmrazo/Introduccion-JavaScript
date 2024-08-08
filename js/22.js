//POO

//Objet Literal

const producto={
    nombre:'Tablet',
    precio: 500
}

//Object Constructor
function Cliente(nombre,apellido){
    this.nombre=nombre,
    this.apellido=apellido;
}
Cliente.prototype.formatearCliente=function (){
    return `El Cliente ${this.nombre} ${this.apellido}`
}

function Producto(nombre,precio,existencia){
    this.nombre=nombre;
    this.precio=precio;
    this.existencia=existencia;
}

Producto.prototype.formatearProducto= function (){
    return `El producto ${this.nombre} tiene un precio de $ ${this.precio} y la existencia es ${this.existencia}`

}

const producto2=new Producto('Monitor Curvo de 24"',800,true);
const producto3=new Producto('Laptop',700,false);
const cliente= new Cliente('Juan','Perez')



console.log(cliente.formatearCliente())
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());