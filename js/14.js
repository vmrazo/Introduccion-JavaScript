//function sumar(n1,n2){
 //   return n1 + n2;
//}

//const resultado = sumar(2, 3);

//console.log(resultado);

let total=0;

function agregarCarrito(precio){
    return total += precio;
}

total=agregarCarrito(200);
total=agregarCarrito(300);
total=agregarCarrito(150);

function calcularImpuesto(total){
    return 1.15*total;
}

console.log(total);


const totalAPagar=calcularImpuesto(total);
console.log(`El total a pagar con impuestos es de: $${totalAPagar}`);