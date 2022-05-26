function construir(muro){
    console.log('Construyendo..')

    return new Promise( (resolve,reject) =>{
        setTimeout( () => {
            muro.construido = true;
            resolve(muro);
        },500)
    })
}

function aplanar(muro){
    console.log('Aplanando...')

    return new Promise(  (resolve,reject) => {
        setTimeout( ()=> {
            muro.aplanado = true;
            resolve(muro)
        },400)
    })
}

function pintar(muro){
    console.log('Pintando..')

    return new Promise((resolve,reject) => {
        setTimeout( ()=> {
            muro.pintado = true;
            resolve(muro)
        },300)
    })
}

const muro = {
    construido:false,
    aplanado:false,
    pintado:false,
}


const promesaConstruir = construir(muro);
promesaConstruir
    .then( (muroConstruido)=>{
        console.log('Muro actualmente', muroConstruido);
        return aplanar(muroConstruido)  //Esta promesa se pasa al then siguiente
    })
    .then( (muroAplanado) =>{
        console.log('Muro actualmente:', muroAplanado)

        return pintar(muroAplanado)
    })
    .then( (muroPintado) =>{
        console.log('Muero en terer then:', muroPintado)

        console.log('Muro terminado')

    })