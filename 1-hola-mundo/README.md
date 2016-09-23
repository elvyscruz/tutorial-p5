# Programa Hola Mundo

Usualmente el primer programa que creamos en un lenguaje de programacion le llamamos hola-mundo

Este primer programa, dibuja un circulo en nuestro canvas(area de dibujo) en la posicion 50,50 de 100 pixeles de ancho y alto. Por defecto, el canvas tiene un ancho y alto de 100 x 100 pixeles


```javascript
function setup() {
ellipse(50,50,100,100);
}

```

La estructura basica que debe seguir cada programa (sketch) de p5js es la siguiente:

```javascript
function setup(){
}

function draw(){
}
```
Dentro de los corchetes {} de las funciones **setup() y draw()** escribiremos nuestro codigo para instruir a p5js lo que vayamos a realizar. La funcion setup se ejecuta una sola vez cuando inicia el programa, y la funcion draw se ejecuta indefinidamente hasta que finaliza el programa.
