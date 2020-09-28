import {Schema, model} from 'mongoose'
/*
    Hago un expoert sin default por lo que el import deberá ser
    usando entre {} el mismo nombre del objeto exportado,
    ver esto en ejemplo001.ts
*/
export class Vehiculo {
    private _marca: string
    constructor(_marca: string){
        this._marca = _marca
    }
    get marca(){
        return this._marca
    }
}
/*
    Defino el Schema y después el model que será la colección
    en la base de datos del connect.
    Recuerda que se crea en plural si se pone en singular.
    En nuestro caso se creará la colección "vehiculos"
    cuando haga un save().
*/
const VehiculoShema = new Schema({
    marca: String
})
/*
Para pasar de objeto vehículo a Schema
*/
export function objetoSchema(vehiculoO: Vehiculo) {
    let v1 = { 
        marca: vehiculoO.marca
    }
    return v1
}
export default model( 'vehiculos', VehiculoShema )
