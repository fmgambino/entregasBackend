/* 
Teclas para símbolos:
''(ALT + 39)
`` (ALT + CTRL + TECLA})
|| (ALT + 124)
{} (ALT + 123)
# (ALT + 35)
[] (ALT + 91)

Hay tres formas de declarar una variable:
var: tiene alcance global
let: tiene alcance en una ocasión específica
const: es una constante, es decir que no puede ser cambiada, a diferencia de var y let.

Un string es una secuencia de caracteres usado para representar el texto ("").
valor = null (significa que es nulo)

alert(variable): muestra un cuadro de diálogo modal con un mensaje y un botón "Aceptar". Se utiliza para proporcionar información simple al usuario o para solicitar una acción.

prompt(variable): muestra un cuadro de diálogo al usuario con un mensaje y un campo de entrada de texto. El usuario puede ingresar datos en ese campo y hacer clic en "Aceptar" para enviar los datos o "Cancelar" para cerrar el cuadro de diálogo sin enviar datos.

document.write(variable): es un método en JavaScript que se utiliza para escribir texto directamente en el documento HTML mientras se carga o procesa. Puede ser útil para agregar contenido dinámicamente o para realizar operaciones de salida simples. Sin embargo, se debe tener cuidado al usar document.write porque, si se llama después de que la página se ha cargado completamente, puede sobrescribir todo el contenido de la página.

variable1.concat(variable2): se utiliza para combinar dos o más arrays y devolver un nuevo array que contiene los elementos de los arrays originales. Este método no modifica los arrays originales, en lugar de eso, crea un nuevo array que contiene los elementos de los arrays combinados.

parseInt (variable1): se utiliza para convertir una cadena de texto (string) que representa un número en un tipo de dato entero (integer). Si la cadena no representa un número válido, parseInt() intentará extraer la parte numérica de la cadena hasta que se encuentre con un carácter no numérico.

Operadores:
asignación: x = y
asignación de adición: x += y, significa: x = x + y
asignación de sustracción: x -= y, significa: x = x - y
asignación de multiplicación: x *= y, significa: x = x * y
asignación de división: x /= y, significa: x = x / y
asignación de resto: x %= y, significa: x = x % y
aisgnación de exponenciación: x **= y, significa: x ** y

adición (+) (variable1 + variable2)
sustracción (-) (variable1 - varible2)
mulitplicación (*) (variable1 * varible2)
división (/) (variable1 / varible2)
resto (&) (variable1 & variable2)
exponenciación (**) (variable1**2)
incremento (++) (= variable + 1) (primero debe ejecutarse, luego puede ser asignado como valor)
decremento (--) (= variable - 1) (primero debe ejecutarse, luego puede ser asignado como valor)
unario positivo (+) (+variable1)
negación unaria (-) (-variable1)

igualdad (==) (variable1 == variable2) (es igual?)
desigualdad (!=) (variable1 != variable2) (es distinto?)
identidad o igualdad extricta (===) (variable1 === variable2) (es igual y es el mismo tipo de dato?)
falsa identidad o desigualdad extricta (!==) (variable1 !== variable2) (es desigual y diferente tipo de dato?)
mayor (>) (variable1 > variable2) (es mayor?)
menor (<) (variable1 < variable2) (es menor?)
mayor o igual (>=) (variable1 >= variable2) (es mayor o igual?)
menor o igual (<=) (variable1 <= variable2) (es menor o igual?)

AND (&&) (varible1 && variable2) (se cumple para ambas?) (TRUE OR FALSE)
num1 = 10
num2 = 5
afirmacion1 = num1 > num2 (True)
afirmacion2 = num1 == num2 (False)
afirmacion3 = num1 != num2 (True)

afirmacion1 && afirmacion2 (False) (No se cumple para ambas, ya que afirmación2 es falsa)
afirmacion1 && afirmacion3 (True) (Si se cumple para ambas, ya que afirmacion1 y afirmacion3 son verdaderas)


OR (||) (variable1 || variable2) (se cumple para alguna?) (TRUE OR FALSE)
num1 = 10
num2 = 5
afirmacion1 = num1 > num2 (True)
afirmacion2 = num1 == num2 (False)
afirmacion3 = num1 < num2 (False)

afirmacion1 || afirmacion2 (True) (Si se cumple, ya que afirmacion1 es verdadera)
afirmacion2 || afirmacion3 (False) (No se cumple, ya que afirmacion2 y afirmacion3 son falsas)


NOT (!) (!variable1) (si es verdadero, hazlo falso y si es falso, hazlo verdadero) (TRUE OR FALSE)
num1 = 10
num2 = 5
afirmacion1 = num1 > num2 (True)
afirmacion2 = num1 == num2 (False)

!afirmacion1 (False) (al ser afirmacion1 verdadera, se hizo falsa)
!afirmacion2 (True) (al ser afirmacion2 falsa, se hizo verdadera)


Concatenación:

CASO 1:
saludo = "¡Hola!";
pregunta = " ¿Cómo estás?";

concatenación = saludo + pregunta; (= ¡Hola! ¿Cómo estás?)

CASO 2:
numero1 = 3;
numero2 = 4;

concatenación = "" + numero1 + numero2; (=34)
a diferencia de,
suma = numero1 + numero2; (=7)

CASO 3:
numero1 = "5"; (es IMPORTANTE que un sea una valor string (""))
numero2 = 7;

concatenación= numero1.concat(numero2); (=57)

CASO 4 (Método con Backticks):
nombre = "Ennio"
frase = `Hola soy ${nombre} y estoy escribiendo` (IMPORTANTE usar ``(acento grave) presionando ALT + CTRL + TECLA})

(= Hola soy Ennio y estoy escribiendo)

CASO 5:
Para agregar comillas simples y dobles dentro de una oración sin ocasionar errores:

frase = "Hola me llamo 'Ennio' y estoy escribiendo" (= Hola me llamo 'Ennio' y estoy escribiendo)

frase = 'Hola me llamo "Ennio" y estoy escribiendo' (= Hola me llamo "Ennio" y estoy escribiendo)

Condicionales:

if: es utilizada para realizar una evaluación condicional. Permite ejecutar un bloque de código ({}) si una expresión lógica o condición es evaluada como verdadera. Es el primer condicional que se escribe.

num1 = 8
num2 = 5

if (num1 > num2) {
    alert(num1 + num2)
}

Como num1 si es mayor a num2 (TRUE), se ejecuta el bloque de código dando como resultado = 13 (num1 (8) + num2 (5))

else if: se utiliza en conjunto con la instrucción if para evaluar múltiples condiciones en un bloque de código. Permite especificar una nueva condición que se evaluará solo si la condición precedente (la que está en el if o en el último else if) es falsa. Siempre se escribe debajo de un if.

num1 = 8
num2 = 8

if (num1 < num2) {
    alert(num1 + num2)
}

else if (num1 == num2) {
    alert(num1 - num2)
}

Al no cumplirse la primera condición con if (FALSE), se evalúa la segunda condición (else if), la cual resulta ser verdadera (TRUE), provocando que se muestre un alert con la resta entre num1 (8) - num2 (8), que da como resultado = 0.
Si else if hubiese sido falso, el programa no se hubiese ejecutado, y si se desea, es posible seguir agregando condiciones con else if las veces que se quiera.


else: se utiliza junto con la instrucción if para proporcionar un bloque de código que se ejecutará si la condición en el if es falsa. Es una forma de manejar el caso contrario al que se evalúa en el if. Siempre se escribe debajo de un if o debajo de un if else.

edad = 22

if (edad >= 12 && edad < 18) {
    alert ("Eres un adolescente")
}

else if (edad >= 4 && edad < 12) {
    alert ("Eres un niño")
}

else if (edad >= 60 && edad < 120) {
    alert ("Eres un anciano")
}

else {
    alert ("Eres un adulto")
}

Primero se observa, que el primer condicional "if" da un valor de FALSE, ya que edad es 22, y dicha edad no es igual a 12 ni esta comprendida entre 12 y 18, por lo tanto el programa no se ejecuta, ya que el usuario no tiene la edad de un adolescente.

Luego, se evalúa el segundo condicional ahora con "else if", el cual nuevamente da un valor de FALSE, ya que el valor 22 no es igual a 4 ni está comprendido entre 4 y 12, por lo tanto el programa no se ejecuta, ya que el usuario no tiene la edad de un niño.

Después, se evalúa el tercer condicional también "else if", el cual nuevamente da un valor de FALSE, ya que el valor de 22 no es igual a 60 ni está comprendido entre 60 y 120, por lo tanto el programa no se ejecuta, ya que el usuario no tiene la edad de un anciano.

Por último, se procede a la ejecución directa de "else" porque no cuenta con una condición, conteniendo el programa final que debe ser ejecutado ya que ninguna de las condiciones anteriores se cumplieron. El alert le envía al usuario el mensaje de "Eres un adulto".

Ejercicios:

var clave = 123;
let numero = 1;
const nombre = "Juan";

alert(clave);
alert(numero);
alert(nombre);

let apellido = prompt ("Escribe tu apellido");

alert ("Hola " + apellido);

let edad;
edad = 22;

if (edad >= 12 && edad < 18) {
    alert ("Eres un adolescente");
}

else if (edad >= 4 && edad < 12) {
    alert ("Eres un niño");
}

else if (edad >= 60 && edad < 120) {
    alert ("Eres un anciano");
}

else {
    alert ("Eres un adulto");
}

ARRAYS:

Un array, en programación, es una estructura de datos que permite almacenar una colección ordenada de elementos del mismo tipo bajo un solo nombre. Los elementos dentro de un array están dispuestos en posiciones consecutivas de memoria, lo que facilita el acceso y la manipulación de los datos.

array = ["dato0","dato1","dato2","dato3"]
array = [ 0 , 1 , 2 , 3]
document.write(array[1]); esto mostrará en pantalla el siguiente texto: "dato1"

ARRAY ASOCIATIVO:

Es una estructura de datos que asocia claves únicas con valores correspondientes. A diferencia de un array tradicional, donde los elementos están indexados por números enteros, en un array asociativo los elementos están indexados por claves.

Cada elemento en un array asociativo consta de dos partes: una clave y un valor. La clave es utilizada como un identificador único para acceder al valor asociado. Esto significa que en lugar de acceder a los elementos mediante un índice numérico como en un array tradicional, en un array asociativo accedes a los elementos utilizando la clave correspondiente.

let documento = {
    nombre: "Ennio";
    edad: 18;
    pais: "Argentina";
    altura: "1.79m";
}

let nombre = documento["nombre"];
let edad = documento["edad"];
let pais = documento["pais"];
let altura = documento["altura"];

let frase = `Hola soy ${nombre}, tengo ${edad}, nací en ${pais} y mido ${altura}`;

document.write(frase); esto mostrará en pantalla la siguiente frase "Hola soy Ennio, tengo 18, nací en Argentina y mido 1.79m"


WHILE (mientras): 

Se utiliza para ejecutar repetidamente un bloque de código mientras una condición especificada sea verdadera. Básicamente, el código dentro del bloque while se ejecutará repetidamente mientras la condición especificada sea evaluada como verdadera. Funciona al estilo de un bucle, que siempre ejecutará el código del bloque, a no ser de que la condición sea falsa.

let numero = 0

while (numero < 5) {

    numero++;

    document.write(numero + "<br>");
}

En este caso, while ejecuta el código dentro del bloque 5 veces, ya que numero++ va sumando 1 a la varible numero, de esta forma, cada vez que el bloque se ejecuta, se le es asignada a dicha variable un numero más, hasta que numero es igual a 5, y la condición, ahora, no se cumplirá ya que 5 no es menor que 5, sino igual. La condición al ser falsa, provoca que el bucle se detenga, y el código dejará de ejecutarse. A la vez, se mostrará en pantalla una lista de los números del 1 al 5.

DO WHILE: 

"do while" es una estructura de control de flujo similar a while, pero con una diferencia importante: en un bucle do while, el bloque de código se ejecuta al menos una vez, independientemente de si la condición especificada es verdadera o falsa. En esta estructura, el bloque de código dentro del do se ejecutará primero, y luego la condición especificada después del while se evaluará. Si la condición es verdadera, el bloque de código se ejecutará nuevamente. Esto continuará hasta que la condición sea falsa.

let numero = 0

do {

    document.write(numero + "<br>");

    numero++;
}

while (numero < 5);

BREAK:

Se usa para salir de un bucle de manera prematura. Cuando se encuentra la instrucción break dentro bucle, la ejecución del bucle se detiene inmediatamente, y el control pasa a la primera instrucción fuera del bucle.
La utilización más común de break es para salir de un bucle while, do while, for, o switch antes de que la condición normal de finalización se cumpla.

let numero = 0

while(numero < 100) {
    numero++;
    document.write(numero);
    if(numero == 10) {
        break;
    }
}

Cuando numero sea igual a 10, el programa que contiene el bucle while dejará de ejecutarse al tener dentro la instrucción break. Se imprimirán en pantalla los numeros del 1 al 10.

FOR:

La estructura de control for se utiliza para iterar sobre una secuencia de elementos, como una matriz (array) o un rango de números.

inicio: Esta parte del bucle se ejecuta una sola vez al principio. Se utiliza para inicializar variables o configurar valores iniciales antes de comenzar las iteraciones.

condición: Es una expresión booleana que se evalúa antes de cada iteración del bucle. Si la condición es verdadera, el bloque de código dentro del bucle se ejecutará; de lo contrario, el bucle se detendrá.

actualización: Esta parte del bucle se ejecuta después de cada iteración. Se utiliza para actualizar variables o realizar otras acciones necesarias antes de que se evalúe nuevamente la condición.

for (inicio; condición; actualización) {
    // Bloque de código a ejecutar en cada iteración
}

for (let i = 1; i <=5; i++) {
    document.write(i);
}

CONTINUE:

La instrucción continue se utiliza para saltar a la siguiente iteración del bucle sin ejecutar el resto del código dentro del bloque del bucle en esa iteración específica. En resumen, cuando se encuentra la instrucción continue, el flujo de control salta inmediatamente al inicio del bucle para la siguiente iteración, omitiendo cualquier código que quede dentro del bucle.

for (let i = 0; i < 5; i++) {
    if (i == 3) {
        continue;
    }
    
    document.write(i);
}

Este código escribirá en pantalla todos los numeros del 0 al 5, excepto el tres. Ya que le estamos diciendo al programa que cuando i sea igual a 3, se saltee el código dentro del bloque, pero que luego continue con el bucle for de modo que cuando i sea igual a 4, volverá a ejecutarse el código dentro del bloque, en este caso (document.write(i)).


FOR IN:

Se utiliza para iterar sobre las propiedades de un objeto.
Itera sobre las propiedades enumerables, incluidas las heredadas si el objeto no está vacío.

let objetos = ["guitarra","plato","libro"];

for (let elemento in objetos) {
    document.write(objetos); // muestra '1', '2', '3'
    document.write(objetos[elemento]); // muestra 'guitarra', 'plato', 'libro'
}

FOR OF:

Se utiliza para iterar sobre objetos iterables como arrays, strings, maps, sets, etc.
Itera sobre los valores del iterable, no sobre las propiedades.

let animales = ["jirafa","tigre","elefante"]

for (let animal of animales) {
    document.write(animal); // muestra 'jirafa','tigre','elefante'
}


for in muestra la posición de los elementos
for of muestra el valor de dichos elementos

for in es para objetos, iterando sobre claves o propiedades.
for of es para iterar sobre colecciones iterables como arrays, strings, maps, sets, etc., iterando sobre sus valores.

En ambos se crea una variable (en estos casos, let elemento y let animal), la cual se usará para guardar la posición (for in) o el valor (for of) de los elementos dentro de un array.

ARRAY DENTRO DE UN ARRAY:

array1 = ["Juan";"Lucas";"Luis"];
array2 = ["Pablo";"Enzo";array1];

for (let array in array2) {
    if (array == 2) {
        for (let array of array1) {
            document.write(array);
        }
    }
    else {
        document.write(array2[array]);
    }
}

Explicación: 

El primer bucle for in, guarda la posicion de los elementos del array2 en una variable llamada array. Luego, mediante un condicional if, se compara dicha variable, siendo que la misma deberá ser igual a 2 para que se ejecute el código dentro de dicho if. Esta variable "array", al tener como primer valor 0 en la posición "Pablo", ignora el if, ya que la condicón no se cumple y ejecuta else. El código dentro de else, escribe en pantalla el valor de array2 dependiendo de la posición guardada en array, primero la posición 0, será "Pablo", y luego, en la posición 1 será "Enzo". Una vez que la variable "array" toma como valor 2 (posición de array1 en array2), ahora si, puede ejecutarse el código dentro de if (se cumple la condición). Dentro de if, hay un bucle for of, el cual ahora, guardará en la variable "array" el valor de cada elemento dentro del array1. Finalmente, este bucle termina cuando se escribe en pantalla todos los elementos dentro de array1, ya que se ejecuta el bucle for of, tantas veces como la cantidad de elementos dentro de array1. Se escribirá en pantalla "Juan", seguido de "Lucas" y luego "Luis".

LABEL:

Es una etiqueta que se puede asociar con un bucle (for, while, do...while) o una declaración (break o continue). Se utiliza principalmente para controlar el flujo de ejecución en estructuras de bucle anidadas.

La sintaxis para una etiqueta es simplemente un identificador seguido de dos puntos (:), y se coloca antes del bucle o declaración a la que se quiere asociar.

array1 = ["Juan";"Lucas";"Luis"];
array2 = ["Pablo";"Enzo";array1];

bucle1:
for (let array in array2) {
    if (array == 2) {
        for (let array of array1) {
            document.write(array);
            break bucle1;
        }
    }
    else {
        document.write(array2[array]);
    }
} // Esto hará que se muestre en pantalla "Pablo", "Enzo", "Juan". En cambio, "Lucas" y "Luis" no se mostrarán ya que break rompe el bucle por completo. Esto se logra colocando el nombre del label al lado de break. En este caso, bucle1 es el nombre de dicho label y se asigna también todo lo que abarca bucle1 seguido de (:).

SWITCH:

El switch es una estructura de control en muchos lenguajes de programación que permite evaluar una expresión y ejecutar bloques de código diferentes dependiendo del valor de esa expresión. En el caso de JavaScript, se utiliza junto con case y break para realizar una serie de comparaciones y ejecutar el bloque de código correspondiente al caso que coincida con el valor de la expresión evaluada en el switch.

La sintaxis básica de un switch en JavaScript es la siguiente:

switch (expresion) {
  case valor1:
    // Código a ejecutar si la expresion es igual a valor1
    break;
  case valor2:
    // Código a ejecutar si la expresion es igual a valor2
    break;
  // Otros casos...
  default:
    // Código a ejecutar si ninguno de los casos anteriores coincide con la expresion
}

case valor1: Es un caso dentro del switch. Si la expresión es igual a valor1, se ejecuta el bloque de código asociado.

break: Es una palabra clave que indica que se debe salir del switch después de ejecutar el bloque de código correspondiente a un caso.

default: Es un caso opcional que se ejecuta si ninguno de los casos anteriores coincide con la expresión evaluada en el switch. Es similar a un "else" en una estructura if.

FUNCTION (FUNCIÓN):

Es un bloque de código reutilizable que realiza una tarea específica. Puede aceptar parámetros (variables) y devolver un valor opcional.

function saludar(){

    respuesta = prompt ("¡Hola! ¿Cómo fue tu día?");
    if (respuesta = "bien") {
        alert("me alegro")
    } else {
        alert("una pena")
    }

}

saludar()
saludar()

En este caso, estamos ejecutando la función saludar dos veces, por lo cual el programa dentro del bloque de la función saludar se ejecutará 2 veces.

RETURN:

Se utiliza dentro de una función para devolver un valor y finalizar la ejecución de la función. Esto es útil cuando quieres que una función produzca un resultado que pueda ser utilizado fuera de la función en la que se encuentra.
Recuerda que return termina la ejecución de la función en el punto en el que se encuentra, por lo que cualquier código después de un return no se ejecutará.

function nombreFuncion(parametro1, parametro2, ...) {
    // Código de la función
    return valor; // Devuelve el valor y termina la función
}

Ejemplo 1:

function sumar(a, b) {
    return a + b; // Devuelve la suma de a y b
}

const resultado = sumar(3, 5); // Llamada a la función sumar
console.log(resultado); // Salida: 8

El valor de return es el que se guarda en la variable sumar.

Ejemplo 2:

function obtenerDatos() {
    return { nombre: 'Juan', edad: 30 };
}

const persona = obtenerDatos();
console.log(persona.nombre); // Salida: Juan
console.log(persona.edad); // Salida: 30

Return solo puede devolver un valor, pero puedes devolver múltiples valores utilizando objetos, arrays o estructuras de datos más complejas.


PARÁMETROS:

Los parámetros en una función de JavaScript son variables que se utilizan para pasar valores a la función cuando esta es llamada. Estos parámetros permiten que la función pueda recibir datos y trabajar con ellos de manera dinámica. 

function nombreFuncion(parametro1, parametro2, ...) {
    // Código de la función que utiliza los parámetros
}

Ejemplo 1:

function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
}

saludar('Juan'); // Salida: Hola, Juan!
saludar('María'); // Salida: Hola, María!

Ejemplo 2:

function suma(num1,num2){
    let resultado = num1 + num2
    document.write(resultado)
    document.write("<br>")
}

suma(12,33) // Se guarda en la variable resultado el valor de 45
suma(8,22) // Se guarda en la variable resultado el valor de 30

FUNCIÓN FLECHA:

Una función flecha en JavaScript es una forma más concisa y moderna de escribir funciones. Se introdujo en ECMAScript 6 (ES6) y proporciona una sintaxis más compacta y clara para definir funciones.

Ejemplo 1:

const nombreFuncion = (parametro1, parametro2, ...) => {
    // Código de la función
};

Ejemplo 2:

const saludar = (nombre) => {
    console.log(`Hola, ${nombre}!`);
};

saludar('Juan'); // Salida: Hola, Juan!

El function utilizado anteriormente es reemplazado por "=>", y va luego del paréntesis que contiene los parámetros.


FUNCIÓN ANÓNIMA:

Una función anónima es una función que no tiene un nombre identificador asociado. En lugar de definirse con una declaración de función tradicional utilizando la palabra clave function, una función anónima se define directamente como una expresión dentro de otra expresión o como argumento de otra función.

Expresión de función anónima:

let sumar = function(a, b) {
    return a + b;
};

En este caso, sumar es una variable que almacena una función anónima que suma dos números.

Función de flecha anónima:

let saludar = () => {
    console.log("Hola, soy una función de flecha anónima.");
};

Las funciones de flecha en JavaScript también pueden ser funciones anónimas si no se les asigna un nombre identificador.

OBJETOS:

Los objetos son estructuras de datos que permiten almacenar colecciones de propiedades y sus valores asociados. Cada propiedad de un objeto tiene un nombre único (también llamado clave o identificador) y un valor asignado.

Las propiedades son los nombres únicos que identifican cada elemento dentro de un objeto. Estos nombres se usan para acceder y modificar los valores asociados a cada propiedad. 

let persona = {
    nombre: "Juan",
    edad: 30,
    correo: "juan@example.com"
};

En este ejemplo, nombre, edad y correo son las propiedades del objeto persona.

Los valores son los datos asociados a cada propiedad de un objeto. Estos valores pueden ser de cualquier tipo de dato en JavaScript, incluyendo números, cadenas de texto, arreglos, funciones, objetos anidados, etc.

let persona = {
    nombre: "Juan",
    edad: 30,
    correosElectronicos: ["juan@example.com", "juan@gmail.com"],
    direccion: {
        calle: "Av. Principal",
        ciudad: "Ciudad de Ejemplo"
    },
    decirHola: function() {
        console.log("¡Hola!");
    }
};

En este caso, los valores asociados a las propiedades del objeto persona son cadenas de texto (nombre), números (edad), un arreglo de cadenas (correosElectronicos), un objeto anidado (direccion) y una función (decirHola).

OBJETOS CONSTRUCTORES:

Los objetos constructores en JavaScript son funciones que se utilizan como plantillas para crear múltiples instancias de objetos con propiedades y métodos comunes. Estas funciones constructoras se definen utilizando la palabra clave function seguida del nombre del constructor (generalmente en mayúscula para distinguirlo de las funciones normales).

// Definición del constructor
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    };
}

// Creación de instancias utilizando el constructor
let persona1 = new Persona("Juan", 30);
let persona2 = new Persona("María", 25);

// Acceso a las propiedades y métodos de las instancias
console.log(persona1.nombre); // Output: "Juan"
console.log(persona2.edad); // Output: 25

persona1.saludar(); // Output: "Hola, soy Juan y tengo 30 años."
persona2.saludar(); // Output: "Hola, soy María y tengo 25 años."


En este ejemplo, Persona es el objeto constructor. Cuando se utiliza la palabra clave new seguida del nombre del constructor (new Persona()), se crea una nueva instancia del objeto con las propiedades y métodos definidos en la función constructora.

Dentro del constructor, this se refiere a la instancia actual que se está creando. Las propiedades (nombre y edad) y el método (saludar) se asignan a cada instancia utilizando this.

MÉTODOS:

Los métodos en JavaScript son funciones asociadas a objetos. Estas funciones pueden ser definidas dentro de un objeto para realizar operaciones específicas relacionadas con los datos almacenados en el objeto.

// Definición del objeto
let persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
};

// Llamada al método del objeto
persona.saludar(); // Output: "Hola, soy Juan y tengo 30 años."

En este ejemplo, saludar es un método del objeto persona. Está definido como una función dentro del objeto y se puede acceder a él utilizando la notación de punto (objeto.metodo()). Al llamar al método saludar() del objeto persona, se ejecuta el código dentro de la función y se muestra el mensaje con el nombre y la edad de la persona.

Es importante tener en cuenta que en los métodos definidos dentro de un objeto, la palabra clave this se refiere al objeto actual al que pertenece el método. Esto permite acceder y manipular las propiedades del objeto dentro de la función del método.

ARREGLOS:

Un "arreglo" en JavaScript es una estructura de datos que se utiliza para almacenar una colección ordenada de elementos. Estos elementos pueden ser de cualquier tipo de datos, como números, cadenas de texto, objetos, funciones, u otros arreglos. En JavaScript, los arreglos se definen utilizando corchetes [] y pueden contener cero o más elementos separados por comas.

// Definición de un arreglo con varios tipos de elementos
let arreglo = [1, 'Hola', true, { nombre: 'Juan', edad: 30 }, [2, 3, 4]];

// Acceso a elementos del arreglo mediante índices
console.log(arreglo[0]); // Output: 1
console.log(arreglo[1]); // Output: "Hola"
console.log(arreglo[3].nombre); // Output: "Juan"
console.log(arreglo[4][2]); // Output: 4

// Modificación de elementos del arreglo
arreglo[1] = 'Hola Mundo';
console.log(arreglo); // Output: [1, "Hola Mundo", true, { nombre: 'Juan', edad: 30 }, [2, 3, 4]]

// Obtención de la longitud del arreglo
console.log(arreglo.length); // Output: 5

// Iteración sobre los elementos del arreglo utilizando un bucle for
for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}

En este ejemplo, el arreglo arreglo contiene diferentes tipos de elementos: un número, una cadena de texto, un booleano, un objeto, y otro arreglo. Puedes acceder a cada elemento del arreglo utilizando su índice dentro de corchetes (arreglo[indice]). El índice de los elementos comienza en 0 para el primer elemento y se incrementa en 1 para cada elemento subsiguiente.

CLASES:

Las clases son una forma de definir objetos y su comportamiento de manera más estructurada y orientada a objetos.

// Definición de una clase en JavaScript
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Creación de instancias de la clase Persona
let persona1 = new Persona("Juan", 30);
let persona2 = new Persona("María", 25);

// Llamada a métodos de las instancias
persona1.saludar(); // Output: "Hola, soy Juan y tengo 30 años."
persona2.saludar(); // Output: "Hola, soy María y tengo 25 años."

En este ejemplo, Persona es una clase que tiene un constructor para inicializar las propiedades (nombre y edad) de cada instancia de la clase. También tiene un método saludar que muestra un mensaje utilizando las propiedades de la instancia.

Al crear instancias de la clase Persona con new Persona(), se llamará automáticamente al constructor para inicializar las propiedades de cada instancia. Luego, se pueden llamar a los métodos de las instancias para realizar operaciones específicas relacionadas con los datos de cada objeto.

OPERADOR IN:

El operador in es utilizado en JavaScript para iterar sobre las propiedades de un objeto.

Se utiliza para verificar si una propiedad específica existe en un objeto, incluyendo las propiedades heredadas a través de la cadena de prototipos del objeto.

La sintaxis del operador in es: propiedad in objeto.

Devuelve true si la propiedad especificada está presente en el objeto o en su cadena de prototipos, y false si no lo está.

let persona = {
    nombre: "Juan",
    edad: 30
};

console.log("nombre" in persona); // Output: true
console.log("apellido" in persona); // Output: false

LENGHT:

.length: Es una propiedad que se usa en cadenas de texto y arreglos para obtener la longitud (cantidad de caracteres o elementos) de la cadena o del arreglo.

let texto = "Hola mundo";
console.log(texto.length); // Output: 10

TOLOWERCASE:

.toLowerCase(): Es un método que se usa en cadenas de texto para convertir todos los caracteres de la cadena en minúsculas.

let texto = "Hola Mundo";
console.log(texto.toLowerCase()); // Output: "hola mundo"

TOUPPERCASE:

.toUpperCase(): Es un método que se usa en cadenas de texto para convertir todos los caracteres de la cadena en mayúsculas.

let texto = "hola mundo";
console.log(texto.toUpperCase()); // Output: "HOLA MUNDO"

TOFIXED:

.toFixed(): Es un método que se usa en números para formatear el número con una cantidad específica de decimales y devuelve una cadena de texto.

let numero = 3.14159;
console.log(numero.toFixed(2)); // Output: "3.14"

PARSEINT:

.parseInt(): Es una función global que se usa para convertir una cadena de texto en un número entero. Si la cadena contiene caracteres no numéricos, solo se toma la parte numérica al principio de la cadena.

let numeroTexto = "123";
let numero = parseInt(numeroTexto);
console.log(numero); // Output: 123

PUSH:

.push(elemento1, elemento2, ...): Este método se usa en arreglos para agregar uno o más elementos al final del arreglo y devuelve la nueva longitud del arreglo.

let arreglo = [1, 2, 3];
arreglo.push(4, 5);
console.log(arreglo); // Output: [1, 2, 3, 4, 5]

UNSHIFT:

.unshift(elemento1, elemento2, ...): Este método se usa en arreglos para agregar uno o más elementos al principio del arreglo y devuelve la nueva longitud del arreglo.

let arreglo = [3, 4, 5];
arreglo.unshift(1, 2);
console.log(arreglo); // Output: [1, 2, 3, 4, 5]

SHIFT:

.shift(): Este método se usa en arreglos para eliminar el primer elemento del arreglo y devuelve el elemento eliminado.

let arreglo = [1, 2, 3];
let elementoEliminado = arreglo.shift();
console.log(arreglo); // Output: [2, 3]
console.log(elementoEliminado); // Output: 1

POP:

.pop(): Este método se usa en arreglos para eliminar el último elemento del arreglo y devuelve el elemento eliminado.

let arreglo = [1, 2, 3];
let elementoEliminado = arreglo.pop();
console.log(arreglo); // Output: [1, 2]
console.log(elementoEliminado); // Output: 3

SPLICE:

.splice(indice, cantidad, elemento1, elemento2, ...): Este método se usa en arreglos para modificar el contenido del arreglo eliminando elementos existentes y/o agregando nuevos elementos. Devuelve un arreglo con los elementos eliminados.

let arreglo = [1, 2, 3, 4, 5];
let elementosEliminados = arreglo.splice(1, 2, 'a', 'b');
console.log(arreglo); // Output: [1, 'a', 'b', 4, 5]
console.log(elementosEliminados); // Output: [2, 3]

JOIN:

.join(separador): Este método se usa en arreglos para crear y devolver una cadena de texto con todos los elementos del arreglo concatenados, separados por el separador especificado.

let arreglo = ['Hola', 'Mundo'];
let cadena = arreglo.join(' ');
console.log(cadena); // Output: "Hola Mundo"

CONCAT:

.concat(arreglo2, arreglo3, ...): Este método se usa en arreglos para combinar múltiples arreglos en uno solo y devuelve el nuevo arreglo resultante.

let arreglo1 = [1, 2];
let arreglo2 = [3, 4];
let arregloCombinado = arreglo1.concat(arreglo2);
console.log(arregloCombinado); // Output: [1, 2, 3, 4]

SLICE:

.slice(inicio, fin): Este método se usa en arreglos para extraer una porción del arreglo y devuelve un nuevo arreglo con los elementos seleccionados. El parámetro inicio es el índice de inicio y fin es el índice final (no inclusivo).

let arreglo = [1, 2, 3, 4, 5];
let subArreglo = arreglo.slice(1, 3);
console.log(subArreglo); // Output: [2, 3]

INDEXOF:

.indexOf(elemento): Este método se usa en arreglos para buscar un elemento y devolver el índice de la primera aparición del elemento. Si el elemento no está en el arreglo, devuelve -1.

let arreglo = ['a', 'b', 'c'];
let indice = arreglo.indexOf('b');
console.log(indice); // Output: 1

INCLUDES:

.includes(elemento): Este método se usa en arreglos para verificar si un elemento está presente en el arreglo y devuelve true si lo encuentra o false si no lo encuentra.

let arreglo = ['a', 'b', 'c'];
console.log(arreglo.includes('b')); // Output: true
console.log(arreglo.includes('d')); // Output: false

REVERSE:

.reverse(): Este método se usa en arreglos para invertir el orden de los elementos en el arreglo y devuelve el arreglo invertido.

let arreglo = [1, 2, 3];
arreglo.reverse();
console.log(arreglo); // Output: [3, 2, 1]

FUNCION DE ORDEN SUPERIOR:

Una función de orden superior es una función que cumple al menos uno de los siguientes criterios:

Toma una o más funciones como argumentos.
Devuelve una función como resultado.

Funciones que toman funciones como argumentos:

// Función que toma otra función como argumento y la ejecuta
function ejecutarFuncion(funcion) {
    funcion();
}

// Función que se pasa como argumento a la función ejecutarFuncion
function saludar() {
    console.log('Hola mundo!');
}

// Llamada a la función ejecutarFuncion con la función saludar como argumento
ejecutarFuncion(saludar); // Output: "Hola mundo!"

Funciones que devuelven funciones:

// Función que devuelve otra función
function generarSaludo(nombre) {
    return function() {
        console.log('Hola ' + nombre + '!');
    };
}

// Uso de la función generarSaludo para crear una función de saludo personalizada
let saludoJuan = generarSaludo('Juan');
let saludoMaria = generarSaludo('Maria');

saludoJuan(); // Output: "Hola Juan!"
saludoMaria(); // Output: "Hola Maria!"

En estos ejemplos, las funciones ejecutarFuncion y generarSaludo son funciones de orden superior. La primera toma una función como argumento (saludar) y la ejecuta, mientras que la segunda devuelve una función que puede personalizarse según el nombre pasado como argumento.

RETORNAR FUNCIONES:

Esto significa que una función puede devolver otra función como resultado.

// Función de orden superior que retorna otra función
function crearMultiplicador(factor) {
    // Retorna una función que multiplica un número dado por el factor
    return function(numero) {
        return numero * factor;
    };
}

// Uso de la función crearMultiplicador para obtener una función que multiplica por 2
let multiplicarPorDos = crearMultiplicador(2);
console.log(multiplicarPorDos(5)); // Output: 10

// Uso de la función crearMultiplicador para obtener una función que multiplica por 3
let multiplicarPorTres = crearMultiplicador(3);
console.log(multiplicarPorTres(5)); // Output: 15

En este ejemplo, crearMultiplicador es una función de orden superior que toma un factor como argumento y retorna otra función que multiplica un número dado por ese factor. Cuando llamamos a crearMultiplicador(2), obtenemos una nueva función multiplicarPorDos que multiplica por 2. Del mismo modo, al llamar a crearMultiplicador(3), obtenemos la función multiplicarPorTres que multiplica por 3.

MÉTODOS DE BÚSQUEDA:

FOREACH:

forEach(callback): Itera sobre cada elemento del arreglo y ejecuta la función callback para cada elemento.

let numeros = [1, 2, 3, 4];
numeros.forEach(numero => {
    console.log(numero * 2); // Multiplica cada número por 2
});

FIND:

find(callback): Retorna el primer elemento del arreglo que cumple con la condición especificada en la función callback.

let numeros = [1, 2, 3, 4];
let encontrado = numeros.find(numero => numero > 2); // Encuentra el primer número mayor que 2
console.log(encontrado); // Output: 3

FILTER:

filter(callback): Retorna un nuevo arreglo con todos los elementos que cumplan con la condición especificada en la función callback.

let numeros = [1, 2, 3, 4];
let filtrados = numeros.filter(numero => numero % 2 === 0); // Filtra los números pares
console.log(filtrados); // Output: [2, 4]

SOME:

some(callback): Retorna true si al menos un elemento del arreglo cumple con la condición especificada en la función callback, de lo contrario retorna false.

let numeros = [1, 2, 3, 4];
let contienePar = numeros.some(numero => numero % 2 === 0); // Verifica si hay al menos un número par
console.log(contienePar); // Output: true

MAP:

map(callback): Retorna un nuevo arreglo con el resultado de aplicar la función callback a cada elemento del arreglo original.

let numeros = [1, 2, 3, 4];
let duplicados = numeros.map(numero => numero * 2); // Duplica cada número del arreglo
console.log(duplicados); // Output: [2, 4, 6, 8]

REDUCE:

reduce(callback, valorInicial): Aplica una función callback acumulativamente a cada elemento del arreglo para reducirlo a un solo valor. Se puede especificar un valorInicial opcional.

let numeros = [1, 2, 3, 4];
let suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0); // Calcula la suma de todos los números
console.log(suma); // Output: 10

SORT:

sort(comparador): Ordena los elementos del arreglo según el comparador especificado. Si no se proporciona un comparador, los elementos se ordenarán como cadenas de texto.

let frutas = ['Manzana', 'Banana', 'Cereza'];
frutas.sort(); // Ordena las frutas alfabéticamente
console.log(frutas); // Output: ['Banana', 'Cereza', 'Manzana']

*/