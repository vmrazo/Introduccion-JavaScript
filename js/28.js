async function obtenerEmpleados(){

    const archivo = 'js/empleados.json';

    //fetch(archivo)
    //    .then(resultado => {
    //        return resultado.json();
    //    })
    //    .then(datos => {
    //       const {empleados}=datos;
    //       console.log(empleados);
//
    //    });
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}

obtenerEmpleados();