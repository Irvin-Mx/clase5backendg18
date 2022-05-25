function retirarDinero(cantidad){
    return new Promise( (resolve, reject) =>{
        console.log('Procesando su peticion');
        console.log(`La cantidad a retirar es : ${cantidad}`);

        if(cantidad < 100){
            reject('Solo puedo darte más de $100')
        }

        resolve(`${cantidad}.00`)

    })
}


const promesa2000 = retirarDinero(2000)
promesa2000
    .then( (dinero)=>{
        console.log('El cajero me dió:', dinero)
} )
.catch( (err)=>{
    console.log(err);
})


const promesa20 = retirarDinero(20)
promesa20
    .then( (dinero)=>{
        console.log('El cajero me dió:', dinero)
} )
.catch( (err)=>{
    console.log(err);
})
