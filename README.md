Proyectos con TDD con vitest

npm test 
<!-- para correr los tests -->

npm run dev
<!-- para levantar ver la calculadora en el navegador -->


FizzBuzz

Dado un número, muestra el número.
Si el número es divisible por 3, muestra "fizz".
Si el número es divisible por 5, muestra "buzz".
Si el número es divisible tanto por 3 como por 5, muestra "fizzbuzz".


Can Reconfigure

Dados 2 strings, intercambiar las letras entre si.
limitaciones:
Al reemplazar el caracter se debe mantener el orden.
No se puede asignar el mismo caracter a 2 letras distintas.
Deben tener la misma cantidad de letras únicas.
La longitud de los strings tiene que ser la misma.


Calculator
<!-- Para estos test también utilicé testing-library/react y jsdom (emulador del DOM) -->

Faltantes:
- Si presiono 2 operadores seguidos, estos se concatenan, deberia reemplazar el nuevo por el existente.
- Al obtener un resultado y comenzar una nueva ecuación se deberían limpiar los inputs.
- Boton para limpiar el último número ingresado, sin que saque números previamente ingresados ni operadores.