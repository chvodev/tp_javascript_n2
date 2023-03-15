// Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -. Nota: usar confirm()

let resultado = "";
do {
  const cadenaTexto = prompt("Ingrese una cadena de texto");
  if (resultado === "") {
    resultado = `${resultado} ${cadenaTexto}`;
  } else {
    resultado = `${resultado} - ${cadenaTexto}`;
  }
} while (confirm("Desea continuar ingresando cadena de texto?"));
document.write(resultado);
