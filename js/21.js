//This

const reservacion={
    nombre: 'Victor',
    apellido: 'Rodriguez',
    total: 5000,
    pagado: false,
    informacion: function (){
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es ${this.total}`);
    }
}
const reservacion2={
    nombre: 'Manuel',
    apellido: 'Razo',
    total: 5500,
    pagado: false,
    informacion: function (){
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es ${this.total}`);
    }
}

console.log(reservacion.informacion());
console.log(reservacion2.informacion());