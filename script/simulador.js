function convertirUnidadesDeMasa() {
    while (true) {
        let unidadOrigen = prompt("Ingrese la unidad de masa de origen (kg, g, lb, oz, t):").toLowerCase();

        let valorOrigen = parseFloat(prompt(`Ingrese el valor en ${unidadOrigen}:`));

        if (isNaN(valorOrigen)) {
            alert("Error: Ingrese un valor numérico.");
            continue;
        }

        let unidadDestino = prompt("Ingrese la unidad de masa de destino (kg, g, lb, oz, t):").toLowerCase();

        let resultado;
        switch (unidadOrigen) {
            case 'kg':
                switch (unidadDestino) {
                    case 'kg':
                        resultado = valorOrigen;
                        break;
                    case 'g':
                        resultado = valorOrigen * 1000;
                        break;
                    case 'lb':
                        resultado = valorOrigen * 2.20462;
                        break;
                    case 'oz':
                        resultado = valorOrigen * 35.274;
                        break;
                    case 't':
                        resultado = valorOrigen * 0.001;
                        break;
                    default:
                        alert("Error: Unidad de destino no válida.");
                        continue;
                }
                break;
            case 'g':
                
                break;
            
            default:
                alert("Error: Unidad de origen no válida.");
                continue;
        }

        alert(`El valor convertido es: ${resultado} ${unidadDestino}`);

        let continuar = confirm("¿Desea realizar otra conversión de unidades de masa?");
        if (!continuar) {
            break;
        }
    }
}

convertirUnidadesDeMasa();
