let fecha=new Date()
let diaDeSemana = fecha.getDay()
let dia=fecha.getDate()
let mes = fecha.getMonth()
let anio = fecha.getFullYear()
let hora = fecha.getHours()
let minuto = fecha.getMinutes()
let segundo = fecha.getSeconds()
let hh=fecha.getTime()

let diasDeSemana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Setiembre','Octubre','Noviembre','Diciembre']

let fechaHoy = diasDeSemana[diaDeSemana]+' - '+ dia+'/'+ meses[mes] +'/'+anio
let horaHoy=hora+'hs. '+minuto+'min. '+segundo+'seg.'

console.log("Fecha de Hoy:", fechaHoy,horaHoy)
