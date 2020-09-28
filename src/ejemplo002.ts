import { disconnect } from './database'
import { connect } from './database'
// Podría usar cualquier nombre porque está exportado con default
import vehiculos from './model/vehiculo'  
import { Vehiculo } from './model/vehiculo'
import { objetoSchema } from './model/vehiculo'
/*
    Observar el uso de las funciones asincronas para
    tener el control del flujo del programa
*/
async function miCon(){
    await connect()
    await restoTrabajo()
    await disconnect()
}
async function restoTrabajo(){
    // Creo el objeto de la clase
    let vo1 = new Vehiculo('Ferray')
    // Obtengo el objeto schema para el objeto de la clase
    const dato = objetoSchema (vo1)
    // creo el documento a partir del objeto schema
    const documento = new vehiculos ( dato )
    console.log(documento)
    // salvo el documento
    await documento.save()
}
miCon()
