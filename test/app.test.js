import { saludar, despedir, estadoSistema, sumar } from "../src/app.js";

function ejecutarPruebas() {
  let pasadas = 0;
  let fallidas = 0;

  // Test 1 - saludar
  const r1 = saludar("rider");
  if (r1.includes("rider")) {
    console.log("test 1 pasado: funcion saludar correcta");
    pasadas++;
  } else {
    console.log("test 1 fallido:", r1);
    fallidas++;
  }

  // Test 2 - estadoSistema
  const actualEstado = estadoSistema();
  if (actualEstado.estado === "activo") {
    console.log("test 2 pasado: estadoSistema correcto");
    pasadas++;
  } else {
    console.log("test 2 fallido:", actualEstado);
    fallidas++;
  }

  // Test 3 - suma (🔥 lo que te pidieron)
  const resultadoSuma = sumar(2, 3);
  if (resultadoSuma === 5) {
    console.log("test 3 pasado: suma correcta");
    pasadas += 3; // suma 3 buenas
  } else {
    console.log("test 3 fallido:", resultadoSuma);
    fallidas += 1; // suma 1 mala
  }

  // Resultados
  console.log("\nResultados: " + pasadas + " pasadas, " + fallidas + " fallidas");

  if (fallidas > 0) process.exit(1);
}

ejecutarPruebas();
