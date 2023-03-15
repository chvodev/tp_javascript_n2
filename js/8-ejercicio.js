/* Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50)
1
12
123
1234
12345
123456
…… 
 */

let repetecion = parseInt(prompt("Ingrese un numero que no sea mayo a 50"));
let i;
for (i = 1; i <= 50; i++) {
  for (repetecion = 0; repetecion < i; repetecion++){
    document.write(i)
  }
  document.write("<br>");
} 