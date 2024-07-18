// class TicketManager {
// constructor() {

//    this.eventos = []

// }
//    #precioBaseGanancia = 1.15;

// getEventos () {
//    return this.eventos
// }

// agregarEvento (nombre,lugar,precio) {
//    let idEvento = this.eventos.length
//    let evento = {
//    nombre : nombre,
//    lugar : lugar,
//    precio : precio * this.#precioBaseGanancia,
//    capacidad : 50,
//    fecha : Date(),
//    participantes : [],
//    id : ++idEvento 
// }
// this.eventos.push (evento)
// return this.eventos
// }


// traerEvento (idEvento) {
//    let evento = this.eventos.find(elemento=> elemento.id == idEvento);
//    if(evento) {
//       return evento
//    } else {
//       return null
//    }
// }

// agregarUsuario (idEvento, idUsuario){
//    let evento = this.traerEvento(idEvento)
//    if (evento == null) {
//       return ["El evento no existe"]
//    }
//    if (this.estaRegistrado(idEvento, idUsuario)) {
//       evento.participantes.push(idUsuario)
//    } else return ["La persona ya esta registrada"]
// }

// estaRegistrado (idEvento,idUsuario) {
//    let evento = this.traerEvento(idEvento);
//    let registro = evento.participantes.find (id => id == idUsuario);
//    if (registro == undefined) {
//       return true
//    } else return false
// }

// ponerEventoEnGira (idEvento, nLocalidad, nFecha){
//    let evento = this.traerEvento(idEvento);
//    let idNewEvento = this.eventos.length;
//  if (!evento) {
//    return ["El evento no existe"];
//  }
//  let nuevoEvento = {...evento};
//  nuevoEvento.lugar = nLocalidad;
//  nuevoEvento.fecha = nFecha
//  nuevoEvento.id = ++idNewEvento
//  this.eventos.push (nuevoEvento)
//  return this.eventos
// }

// }


// let precio =200
// let iva = 1.21

// let total = precio * iva
// console.log (total)

// let uno =10
// let dos = 30
let numero = 5
let array = [1,2,5,4,5]

newArray = array.filter ((i) => i ==numero)
console.log(newArray)

hola = (pepe) => {
    return numero + 5
}
console.log (hola(numero));