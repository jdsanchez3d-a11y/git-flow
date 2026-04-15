export function saludar(nombre) {
  return "hola " + nombre + ", bienvenido a aplicacion codeRider";
}

export function despedir(nombre) {
  return "hasta pronto " + nombre + ", !Jesus";
}

export function estadoSistema() {
  return {
    estado: "activo",
    version: "1.0.0",
    message: "Sistema chucho funcionando correctamente"
  };
}

export function sumar(a, b) {
  return a + b;
}
export function resta(q, g) {
  return q-g;
}



export function healthCheck() {
  return {
    status: "ok",
    timestamp: new Date().toISOString(),
    servicio: "StreamFlow API",
    version: "1.0.0"
  };
} hola mundo
