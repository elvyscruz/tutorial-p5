## Variables ##

Las variables son identificadores que permiten guardar algun valor. Estos valores pueden ser reasignados y cambiar en cualquier momento..

Como vemos en el ejemplo mas abajo, usamos la palabra var para declarar una variable, luego el nombre de la variable, luego el signo de igual y luego el valor de la variable.

Ej javascript las variables mas usuadas pueden ser los siguientes tipos:

* numericas, ej. 35
* texto, ej. "hola"
* verdadero o falso, ej. true
* arreglos, ej. [3,5,6]
* Objeto, ej. {Nombre: 'elvys'}
* Null, ej. Null
* Undefined, undefined
* Entre otras


Aqui debajo, declaramos cuatro variables con valores numericos que seran usadas en nuestro programa. Tambien usamos las variables de la libreria p5 __mouseX__ y __mouseY__ que indican los valores de la posicion del mouse.

```javascript
var ancho = 400;
var alto = 400;
var tamX = 100;
var tamY = 100;

function setup() {
createCanvas(ancho,alto);
}

function draw() {
  background(255);
  ellipse(mouseX,mouseY,tamX,tamY);

  text("UTESA",mouseX,mouseY)
}
```
