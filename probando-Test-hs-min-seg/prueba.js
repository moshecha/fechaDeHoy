// function asientosDisponibles(libres,elegido){
//     let verifica=libres.indexOf(elegido)
//     if (verifica>=0){return "Felicitaciones, el asiento número "+elegido+" está disponible"}
//     else {return "Lo sentimos, el asiento número "+elegido+" está ocupado, pero aún quedan "+libres.length+" asientos disponibles"}
    
// }

// console.log(asientosDisponibles([1,2,3,4,10],10))

// function reporteDePasajeros(estaciones){
//     let total=0
//     let informe =[]
//     for(let i=0;i<=estaciones;i++){
//         if(i==0){total+=200; informe.push('En la estación 0 hay 200 pasajeros arriba del tren')}
//         else if(i>0&&i!=5){total+=20; informe.push('En la estación '+i+' hay '+total+' pasajeros arriba del tren')}
    
//     else{total+=40; informe.push('En la estación '+i+' hay '+total+' pasajeros arriba del tren')}
//     }return informe
// }

// console.log(reporteDePasajeros(0))

function laClaveSecreta(clave){
    let fraseCompleta = []
    for (let i=clave.length-1;i>=0;i--){
        if(clave[i]!='*'){
        fraseCompleta+=(clave[i])}
        //console.log(i)
        //console.log(clave)
        //console.log(clave.length)
    }return fraseCompleta
    
    }
//console.log(laClaveSecreta(["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"]))
//console.log(laClaveSecreta(['hola ','como ','estas ']))

let arreglo = ['escandalo','alfadi']

let cant = arreglo.push('alf')
arreglo=[1,2,3]
console.log( arreglo)

function alf(){return('hello')}

console.log(alf())

let hello
console.log("🚀 ~ file: prueba.js ~ line 48 ~ hello", hello)

console.log(typeof cant)