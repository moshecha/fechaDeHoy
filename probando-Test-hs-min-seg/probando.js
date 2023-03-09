let nombres = ['Adel',
'Adonis',
'Ajaz',
'Akos',
'Aldo','Amets','Amaro','Aquiles','Algimantas','Alpidio','Amrane','Anish','Arián','Ayun','Azariel','Bagrat','Bencomo','Bertino','Candi','Cesc',
'Cirino','Crisólogo','Cruz','Danilo','Dareck','Dariel','Darin','Delmiro','Damen','Dilan','Dipa','Doménico','Drago',
'Edivaldo',
'Elvis',
'Elyan',
'Emeric',
'Engracio',
'Ensa',
'Eñaut',
'Eleazar','Eros','Eufemio','Feiyang','Fiorenzo','Foudil','Galo','Gastón','Giulio','Gautam',
'Gentil','Gianni','Gianluca','Giorgio','Gourav','Grober','Guido','Guifre','Guim','Hermes','Inge',
'Irai',
'Iraitz',
'Iyad',
'Iyán',
'Jeremías',
'Joao',
'Jun',
'Khaled',
'Leónidas',
'Lier',
'Lionel',
'Lisandro',
'Lucián',
'Mael',
'Misael',
'Moad',
'Munir',
'Nael',
'Najim',
'Neo',
'Neil',
'Nikita',
'Nilo',
'Otto',
'Pep',
'Policarpo',
'Radu',
'Ramsés',
'Rómulo',
'Roy',
'Severo',
'Sidi',
'Simeón',
'Taha',
'Tao',
'Vadim',
'Vincenzo',
'Zaid',
'Zigor',
'Zouhair','aa']


let animales = [
'Águilas',
'Avestruz',
'Ballena',
'Ballena', 'azul',
'Bisonte',
'Búfalo',
'Búhos',
'Buitre',
'Burro',
'Caballo',
'Cabra',
'Camaleón',
'Camello',
'Canario',
'Castor',
'Cebra',]

//console.log(nombres.slice(0,10), animales)
let frase1 = "menciona('Existen muchos lenguajes de programación y JavaScript es uno de ellos','programación'); // true"
function menciona(texto,palabra){
    if(texto.indexOf(palabra)>=0){return true}
    else{return false}
}




let frase = 'Hola!, soy Carli';

let licenciada = frase.slice(11)
//console.log(licenciada)



let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function (horas){
        this.energia -=(horas*5)
        this.experiencia+=(horas*2)
        }
};

// console.log("==Antes de comenzar entrenamiento==");
// console.log("Deportista energia: "+deportista.energia);
// console.log("Deportista experiencia: "+deportista.experiencia);
// console.log("==ENTRENANDO==");
// deportista.entrenarHoras(5);
// console.log("==FIN ENTRENAMIENTO==");
// console.log("Deportista energia: "+deportista.energia);
// console.log("Deportista experiencia: "+deportista.experiencia);

let color = 1==1? 'oki':'oh'
// console.log (color)

let bicicletaA = {
    rodado: 18,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}

let bicicletaConRodadoGrande = bicicletaA.rodado>bicicletaB.rodado?
bicicletaA:bicicletaB;

//console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca );

//for(let i=1;i<=10;(i++)){console.log('elelel'+i)}

function noParesDeContarImparesHasta(numero){
    let total=0
    for(let i=0;i<=numero;i++){
        
        if(i%2!=0){total+=1}
        
    }return total
}

//console.log(noParesDeContarImparesHasta(11))

// let numero=15
// let si=numero%2!=0? numero:''
//console.log("🚀 ~ file: probando.js ~ line 187 ~ numero?", si)
function noParesDeContarImparesHasta2(numero){
    let total = 0 
    for(let i=0;i<=numero;i++){
        i%2!=0? total+=1:''
    }return total
}

//console.log(noParesDeContarImparesHasta2(11))


clima = temperatura =>{
    switch (temperatura){
        case (8)&&(2) :console.log('hace frio')
    }
}




let suma = (num1,num2)=>num1 + num2 
let division = (num1,num2)=>num1 / num2 
let resta = (num1,num2)=>num1 - num2 
let multiplicacion = (num1,num2)=>num1 * num2 
let calculadora = (num1,num2,operacion)=> operacion(num1,num2)

function agregarHttp(url) {
    return "http://" + url
    // escribí tu código aquí
}

function procesar(array,funcion){
    let resultado = []
    for(let i =0;i<array.length;i++)
    {resultado.push(funcion(array[i]))}
    return resultado}

//console.log(procesar(["www.google.com","www.yahoo.com"],agregarHttp) )


let objeto = {nombre:'moshe', segnom:'david',apellido:'chami'}
//console.log("---", 'nombre:',objeto.nombre,'  segnom:',objeto.segnom,'  apellido:',objeto.apellido)


let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]
//console.log(estudiantes[0].nombre=='John')
// let aprobados = estudiantes.filter(function(numero){
//     return numero.promedio >=7
// })



// let desaprobados =estudiantes.filter(function(numero){
//     return numero.promedio <7
// })
//console.log("🚀 ~ file: app.js ~ line 24 ~ desaprobados ~ desaprobados", desaprobados)

//console.log("aprobados:  ", aprobados)
//console.log(estudiantes[0].nombre)

let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];
listaDeSuperMercado.forEach(function(valor){
    //console.log(valor)
})


let fecha=new Date()
let diaDeSemana = fecha.getDay()
let dia=fecha.getDate()
let mes = fecha.getMonth()
let anio = fecha.getFullYear()
let hora = fecha.getHours()
let minuto = fecha.getMinutes()
let segundo = fecha.getSeconds()
let hh=fecha.getTime()
let diasDeSemana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado',]
let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Setiembre','Octubre','Noviembre','Diciembre']
let fechaHoy = diasDeSemana[diaDeSemana]+' - '+ dia+'/'+ meses[mes] +'/'+anio
let horaHoy=hora+'hs. '+minuto+'min. '+segundo+'seg.'
console.log("Fecha de Hoy:", fechaHoy,horaHoy)

let diaymes = [...diasDeSemana,...meses]
//console.log("diaymes", diaymes)

//setTimeout(()=>{console.log('hola',segundo)},1000) //se retrasa 1 segundos cada 1000 milisgundos

let comprar = (lista)=>{lista.forEach ((v,i) => {console.log(i+1,v)})}
//comprar(listaDeSuperMercado)


let salirConAmigos = (salon1,salon2,cb)=>{
return console.log(salon1+salon2)
}
//salirConAmigos('year',' siii','')

function agregarHttp(url) {
    return "http://" + url
}

function procesar(array,funcion){
    let resultado = []
    for(let i =0;i<array.length;i++)
    {resultado.push(funcion(array[i]))}
    return resultado}

console.log(procesar(["www.google.com","www.yahoo.com"],agregarHttp) )

let  procesar2=(array,funcion)=>{
    let array2 = []
    array.forEach((url)=>{ array2.push(funcion(url))})
return array2}
console.log(procesar2(["www.google.com","www.yahoo.com"],agregarHttp) )