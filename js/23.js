//Clases

class Producto{
    constructor(nombre,precio) {
        this.nombre=nombre,
        this.precio=precio;
    }
    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de $ ${this.precio}`
    }
}

const producto2=new Producto('Monitor Curvo de 24"',800);
const producto3=new Producto('Laptop',700);

//Herencia

class Libro extends Producto{
    constructor(nombre,precio,isbn) {
        super(nombre,precio);
        this.isbn=isbn;
    }
    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`
    }
}
const libro = new Libro('Hobbit', 1200, '546765167965');


console.log(libro.formatearProducto());
console.log(producto3.formatearProducto());