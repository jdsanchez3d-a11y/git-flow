import {saludar, despedir, estadoSistema} from "../src/app.js"

function ejecutarPruevas() {
let pasadas = 0;
let fallidas = 0;

const r1 = saludar("rider")
if (r1.includes("rider")){
console.log("test 1 pasado: funcion saludar en coderider es correcta")
pasadas++;
}else{
console.log("test 1 Fallido: ", r1);
fallidas++;
}
const actualEstado= estadoSistema();
if (actualEstado.estado === "activo" ){
console.log("test 2: pasado: estadoSistema() funciona en codeRider");
pasadas++;
}else{
console.log ("test 2 fallido: ", estado, "en codeRider");
fallidas++;
console.log ("\nResultados: " + pasado + "pasado, ", + fallidas + "fallidas");
if (fallidas>0) process.exit(1);
}
}

export funtion sumar(a ,b){
let a = 0;
let b = 0;

}
