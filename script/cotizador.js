function calcularCosto() {
    const añosDominio = parseInt(document.getElementById('añosDominio').value);
    const mesesHosting = parseInt(document.getElementById('mesesHosting').value);
    const tipoPagina = document.getElementById('tipoPagina').value;
    const cuotas = document.getElementById('cuotas').value;
  
    let precioDominio = 0;
    let precioHostingMantenimiento = 0;
    let precioTotal = 0;
    let textoPagina = '';
    let cuota = '';

    switch (tipoPagina) {
        case 'landing':
            precioTotal += 150000;
            textoPagina = 'Landing Page ($150,000)';
            break;
        case 'empresa':
            precioTotal += 220000;
            textoPagina = 'Páginas Web para Empresas ($220,000)';
            break;
        case 'wordpress':
            precioTotal += 250000;
            textoPagina = 'Páginas Web en WordPress ($250,000)';
            break;
        case 'tienda':
            precioTotal += 520000;
            textoPagina = 'Tiendas Online ($520,000)';
            break;
        default:
            break;
    }

    if (!isNaN(añosDominio) && añosDominio > 0) {
        precioDominio = añosDominio * 8500;
    }
    if (!isNaN(mesesHosting) && mesesHosting > 0) {
        precioHostingMantenimiento = mesesHosting * 13000;
    }

    precioTotal += precioDominio + precioHostingMantenimiento;

    switch (cuotas) {
        case '1':
            precioCuota = precioTotal / 1
            cuota = '1 cuota'
            break
        case '3':
            precioCuota = precioTotal / 3
            cuota = '3 cuotas'
            break
        case '6':
            precioCuota = (precioTotal * 1.25) / 6
            cuota = '6 cuotas'
            break
        default:
            break
    }
  
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `
        Precio por dominio: $${precioDominio.toLocaleString()}. <br>
        Precio por hosting + mantenimiento: $${precioHostingMantenimiento.toLocaleString()}. <br>
        Precio por hacer la ${textoPagina}.<br>
        El precio total a pagar es de $${precioTotal.toLocaleString()}. <br>
        Haz elegido pagar en ${cuota} de $${precioCuota.toLocaleString()}.
    `;
}