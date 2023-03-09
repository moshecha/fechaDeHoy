
// let lista = ['hola','como','moshe','david']
// let gu = lista.push()
// console.log(gu)

// let aa = lista.indexOf('moshe')
// console.log(aa)
// console.log(lista.indexOf('david'))

// let alumnos = ['nico','jose','moshe','david']

// for (let i = 0;i<lista.length;i++){
//     console.log('hola '+alumnos[i])
// }

// console.log(alumnos[3])

// function medallaSegunPuesto(puesto){
//     let puestos = [0,'Oro','Plata','Bronce',"Seguí participando"]
//     if (puesto > 0 && puesto <=4){
//         return console.log(puestos[puesto])
//     }else{
//         return console.log(puestos[4])
//     }
// }

// medallaSegunPuesto(0)
// medallaSegunPuesto(1)
// medallaSegunPuesto(2)
// medallaSegunPuesto(3)
// medallaSegunPuesto(4)

// function pasandoPorLosPares(){
//     for(let i=0;i<=6;i++){
//         if (i%2==0){
//         console.log('acá i tiene el valor de '+i)}
//     }
// }

// pasandoPorLosPares()
// function naipes(palo){
//     //let palos=['espadas','oro','copas','bastos']
//     let listaNaipes=[]
//     for(let i=1;i<=12;i++){
//         if(i!=8 && i!=9){
//             listaNaipes.push(i+' de '+ palo)
//         }
//     }return console.log(listaNaipes)
// }

// naipes('espadas')
// naipes('bastos')
// function factorial(n){
//     let enteros=[]
//     let total =1
//     for(let i=2;i<=n;i++){
//         total *= i
//         // enteros.push(i)
//     }
//     for(let i=0;i<enteros.length;i++){

//     }return console.log(total)
// }

// factorial(1)

// function productoria (lista){
//     let total=1
//     for (let i=0;i<lista.length;i++){
//         if(lista[i]!=0){
//             total*=lista[i]
//         }
//     }return total
//     }

//     console.log(productoria([1,2,3,4,5]))

// function alturaArbolUtopico(n){
//     altura=1
//     for(let i=0;i<=n;i++){
//         if(i%2==0&&i>0){//par
//             altura+=1
//         }else if(i%2!=0){altura*=2}//impar
        
//     }return altura
// }
// console.log(i+','+altura)
// console.log(alturaArbolUtopico(3))

function masMenos(lista){
    let positivos =0
    let cero = 0
    let negativos =0
    for (let i=0;i<lista.length;i++){
        if(lista[i]>0){positivos+=1}
        else if(lista[i]<0){negativos+=1}
        else cero +=1
    }
    return [positivos/lista.length,cero/lista.length,negativos/lista.length]
}

console.log(masMenos([1,-1]))