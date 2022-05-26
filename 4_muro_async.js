function construir(muro){
    console.log('Construyendo..')

    return new Promise( (resolve,reject) =>{
        setTimeout( () => {
            muro.construido = true;

            if(muro.construido ==! true){
                reject('No se pudo constuir')
            }

            resolve(muro);
        },500)
    })
}

function aplanar(muro){
    console.log('Aplanando...')

    return new Promise(  (resolve,reject) => {
        setTimeout( ()=> {
            muro.aplanado = true;
            if(muro.construido ==! true || muro.aplanado ==! true){
                reject( new Error('No se pudo constuir'))
            }
            resolve(muro)
        },400)
    })
}

function pintar(muro){
    console.log('Pintando..')

    return new Promise((resolve,reject) => {
        setTimeout( ()=> {
            muro.pintado = true;
            if(muro.construido ==! true || muro.aplanado ==! true || muro.pintado ==! true){
                reject('No se pudo constuir')
            }
            resolve(muro)
        },300)
    })
}

const muro = {
    construido:false,
    aplanado:false,
    pintado:false,
}

//!Promises

// const promesaConstruir = construir(muro);
// promesaConstruir
//     .then( (muroConstruido)=>{
//         console.log('Muro actualmente', muroConstruido);
//         return aplanar(muroConstruido)  //Esta promesa se pasa al then siguiente
//     })
//     .then( (muroAplanado) =>{
//         console.log('Muro actualmente:', muroAplanado)

//         return pintar(muroAplanado)
//     })
//     .then( (muroPintado) =>{
//         console.log('Muero en terer then:', muroPintado)

//         console.log('Muro terminado')

//     })





//!Async await
async function ordenarConstruccion(){
    /*const muroConstruido = */ await construir(muro);
    /*const muroAplanado = */ await aplanar(muroConstruido);
    /*const muroPintado = */ await pintar(muroAplanado);

    console.log('se termino el muro', muroPintado);
}

ordenarConstruccion();