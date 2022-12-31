"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let HeroForce;
    (function (HeroForce) {
        HeroForce[HeroForce["flash"] = 5] = "flash";
        HeroForce[HeroForce["superman"] = 100] = "superman";
        HeroForce[HeroForce["batman"] = 1] = "batman";
        HeroForce[HeroForce["aquaman"] = 0] = "aquaman";
    })(HeroForce || (HeroForce = {}));
    const fuerzaFlash = HeroForce.flash;
    const fuerzaSuperman = HeroForce.superman;
    const fuerzaBatman = HeroForce.batman;
    const fuerzaAcuaman = HeroForce.aquaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
