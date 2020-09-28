/*
    Si hago un import entre {} y con el mismo nombre del objeto exportado 
*/
import { Vehiculo } from './model/vehiculo'
let v1 = new Vehiculo('Opel')
console.log(v1.marca)