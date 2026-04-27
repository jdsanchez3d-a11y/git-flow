const VERSION= "1.2.0";

function saludar (nombre) {
    return "hola ${nombre}, bienvenidos a chuchin.app";
}
function healtCheck(){
    return{
        status: "ok",
        version:VERSION,
        timestamp: new Data().toISOString(),
        messege: "Sistema chuchin funciona correctamente"
    };
}
function verificarSistema(){
    const resultado = healtCheck();
    const statusDiv = document.getElementById("status");
    statusDiv.textContent = `${resultado.messege} | ${resultado.timestamp}`;
    statusDiv.style.color = "#009B4C"
}
Document.addEventiListener("DOMContentLoaded"), () => {
    document.getElementById("version").textContent=`v${VERSION}`;
    verificarSistema();
}