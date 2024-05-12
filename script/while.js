let numero = 0

while(numero < 100) {
    numero++;
    document.write("<br>" + numero);
    if(numero == 10) {
        for (let i = 1; i <=5; i++) {
            document.write("<br>" + "Repetición" + i);
        }
        break;
    }
}