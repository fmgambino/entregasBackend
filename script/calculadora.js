function calculadora() {
    while (true) {
        let operacion = prompt("Ingrese la operación deseada:\n+ para suma\n- para resta\n* para multiplicación\n/ para división\nR para raíz\nPC para potencia cuadrada\n% para porcentaje");

        switch (operacion) {
            case '+':
            case '-':
            case '*':
            case '/':
                let primerNumero = parseFloat(prompt("Ingrese el primer número:"));
                let segundoNumero = parseFloat(prompt("Ingrese el segundo número:"));

                switch (operacion) {
                    case '+':
                        alert(`La suma es: ${primerNumero + segundoNumero}`);
                        break;
                    case '-':
                        alert(`La resta es: ${primerNumero - segundoNumero}`);
                        break;
                    case '*':
                        alert(`La multiplicación es: ${primerNumero * segundoNumero}`);
                        break;
                    case '/':
                        if (segundoNumero !== 0) {
                            alert(`La división es: ${primerNumero / segundoNumero}`);
                        } else {
                            alert("Error: División por cero.");
                        }
                        break;
                }
                break;
            case 'R':
                let indice = parseFloat(prompt("Ingrese el índice de la raíz:"));
                let radicandoRaiz = parseFloat(prompt("Ingrese el radicando de la raíz:"));
                if (radicandoRaiz >= 0) {
                    alert(`La raíz ${indice}-ésima es: ${Math.pow(radicandoRaiz, 1 / indice)}`);
                } else {
                    alert("Error: No se puede calcular la raíz de un número negativo.");
                }
                break;
            case 'PC':
                let basePotencia = parseFloat(prompt("Ingrese el número para calcular la potencia cuadrada:"));
                alert(`La potencia cuadrada es: ${basePotencia * basePotencia}`);
                break;
            case '%':
                let numeroPorcentaje = parseFloat(prompt("Ingrese el número al que le calculará el porcentaje:"));
                let porcentaje = parseFloat(prompt("Ingrese el porcentaje a calcular:"));
                alert(`El porcentaje es: ${(numeroPorcentaje * porcentaje) / 100}`);
                break;
            default:
                alert("Operación no válida.");
        }

        let continuar = confirm("¿Desea realizar otra operación?");
        if (!continuar) {
            break;
        }
    }
}

calculadora();