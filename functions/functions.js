"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activarBatiseñal = () => {
        return 'batiseñal activada';
    };
    console.log(typeof activarBatiseñal);
    const heroName = returnName();
    console.log(heroName);
})();
