// Creo una función principal para demostrar diferentes funcionalidades de Math
function mostrarFuncionesMath() {
    // Valores de ejemplo
    let valores = [3.5, 7.2, 5.1, 9.8, 2.6];

    // Encuentro el valor mínimo y máximo en la lista de valores
    let minimo = Math.min(...valores);
    let maximo = Math.max(...valores);

    console.log(`Valores: ${valores}`);
    console.log(`Mínimo: ${minimo}`);
    console.log(`Máximo: ${maximo}`);

    // Aplico ceil, floor, round a un valor de ejemplo
    let valorEjemplo = 4.7;
    console.log(`Valor de ejemplo: ${valorEjemplo}`);
    console.log(`Math.ceil(${valorEjemplo}): ${Math.ceil(valorEjemplo)}`); // Redondeo hacia arriba
    console.log(`Math.floor(${valorEjemplo}): ${Math.floor(valorEjemplo)}`); // Redondeo hacia abajo
    console.log(`Math.round(${valorEjemplo}): ${Math.round(valorEjemplo)}`); // Redondeo al entero más cercano

    // Encuentro la raíz cuadrada y el cuadrado de un valor
    let valorParaRaiz = 16;
    console.log(`Raíz cuadrada de ${valorParaRaiz}: ${Math.sqrt(valorParaRaiz)}`); // Raíz cuadrada
    console.log(`Cuadrado de ${valorParaRaiz}: ${Math.pow(valorParaRaiz, 2)}`); // Cuadrado

    // Genero un número aleatorio entre 0 y 1
    let numeroAleatorio = Math.random();
    console.log(`Número aleatorio entre 0 y 1: ${numeroAleatorio}`);
}

// Llamo a la función para mostrar los resultados
mostrarFuncionesMath();
