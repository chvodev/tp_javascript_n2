/* Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555
666666
…….......
*/

 
let i, repeticiones;
document.write("<h1>| PIRAMIDE |</h1>")
  for (i= 1; i <= 30; i++) {
    for (repeticiones = 0; repeticiones < i; repeticiones++) {
      document.write(i);
    }
    document.write("<br>");
  }