
//Un objeto promesa
const promesa = new Promise((resolve,reject)=>{
    // resolve({
    //     hola: 'mundo',
    //     test: true
    // })
    reject('aglo salió mal')
})

promesa.then( (unValor) => {              //then will run function if promise is resolved
    console.log( 'Resultado:',unValor)
    }).catch( (err) => {                  //catch willl run function when catch reject is 
        console.log('El error es', err)
    })