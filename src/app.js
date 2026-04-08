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