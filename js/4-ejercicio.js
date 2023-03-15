// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. 

  let pedidoNumero = true;
  let suma = 0;
  do {
    numero = parseInt(prompt("Ingrese un número a sumar"));
    if (isNaN(numero)) {
      alert(`${numero} no es un número`);
    } else {
      suma += numero;
      pedidoNumero = confirm("¿Quieres continuar?");
    }
  } while (pedidoNumero == true);
document.write(`La suma de los número introducidos es: ${suma}`);
