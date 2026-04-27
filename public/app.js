const VERSION = "1.2.0";

function saludar(nombre){
    return `hola ${nombre}, bienvenidos a chuchin.app`;
}

function healthCheck(){
    return {
        status:"ok",
        version: VERSION,
        timestamp: new Date().toISOString(),
        message:"Sistema chuchin funciona correctamente"
    };
}

function verificarSistema(){
    const resultado = healthCheck();
    const statusDiv = document.getElementById("status");

    statusDiv.textContent =
      `${resultado.message} | ${resultado.timestamp}`;

    statusDiv.style.color = "#009B4C";
}

document.addEventListener("DOMContentLoaded", ()=> {
    document.getElementById("version").textContent=`v${VERSION}`;
    verificarSistema();
});