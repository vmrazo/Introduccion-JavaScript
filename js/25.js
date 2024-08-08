const usuarioAutenticado = new Promise((resolve, reject)=>{
    const auth = false;

    if (auth){
        resolve('Usuario autenticado');//El promise se cumple
    }else {
        reject('No se pudo iniciar sesion');//El promise no se cumple
    }
});

usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))

//En los promise existen tres valores
//Pending: No se ha cumplido pero tampoco se ha rechazado
//Fulfield: ya se cumplió
//Rejected: Se ha rechazado o no se pudo cumplir