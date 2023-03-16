class Boxeador {
    constructor (nombre, peso) {
        this.nombre = nombre;
        this.peso = peso;
        this.vida = 0;
    }

    entrarAlRing() {
        console.log(`${this.nombre} entró al ring`);
        this.vida = 10;
    }

    daUnGolpe() {
        const danio = randomWithRange();
        console.log(`${this.nombre} dio un golpe de ${danio}`);
        return danio;
    }

    recibeGolpe(danio) {
        // this.vida = this.vida - danio;
        this.vida -= danio;
        console.log(`La vida de ${this.nombre} es ${this.vida}`);
    }

    declaraVictoria() {
        console.log(`El ganador e ${this.nombre}`);
    }
}

/**
 * @param {Boxeador} boxeadorUno
 * @param {Boxeador} boxeadorDos
 */
function presentarBoxeadores(boxeadorUno, boxeadorDos) {
    boxeadorUno.entrarAlRing();
    boxeadorDos.entrarAlRing();
}

/**
 * @param {Boxeador} boxeadorUno
 * @param {Boxeador} boxeadorDos
 */
function iniciarPelea(boxeadorUno, boxeadorDos) {
    do {
        // Pelea principal
        if((randomWithRange() % 2) === 0) {
            const danio = boxeadorUno.daUnGolpe();
            boxeadorDos.recibeGolpe(danio)
        } else {
            const danio = boxeadorDos.daUnGolpe();
            boxeadorUno.recibeGolpe(danio)
        }
    } while (boxeadorUno.vida > 0 && boxeadorDos.vida > 0);

    // Declara un ganador
    if(boxeadorDos.vida < 1) {
        boxeadorUno.declaraVictoria();
    } else {
        boxeadorDos.declaraVictoria();
    }
}

// funcion principal del juego
;(function () {
    const boxeadorFran = new Boxeador('Fran', 80);
    const boxeadorPepe = new Boxeador('Pepe', 81);

    presentarBoxeadores(boxeadorFran, boxeadorPepe);
    iniciarPelea(boxeadorFran, boxeadorPepe)
})()