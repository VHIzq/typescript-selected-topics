"use strict";
(() => {
    let avenger = 123;
    let power;
    avenger = 'Dr. Strange';
    console.log(avenger.charAt(0));
    avenger = 19.3434;
    console.log(avenger.toFixed(2));
})();
(() => {
    const a = 10;
    console.log(a);
})();
(() => {
    const numbers = [12, 45, true, 'Cyborg'];
    const heroes = ['Raven', 'Beast boy', 'Robin', 'Starfire'];
    heroes.forEach(hero => console.log(hero.toUpperCase()));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();
(() => {
    let audioLevel;
    (function (audioLevel) {
        audioLevel[audioLevel["min"] = 3] = "min";
        audioLevel[audioLevel["med"] = 4] = "med";
        audioLevel[audioLevel["max"] = 10] = "max";
    })(audioLevel || (audioLevel = {}));
    console.log(audioLevel.med);
})();
(() => {
    const error = (msg) => {
        throw new Error(msg);
    };
   // error('SOS');
})();
(() => {
    //let isActive: boolean = null;
    null !== undefined;
})();
(() => {
    let avengers = 10;
    console.log(avengers);
    const villans = 20;
    if (avengers < villans) {
        console.log('Estamos en problemas Houston');
    }
    else {
        console.log('Hemos sido salvados');
    }
    avengers = Number('55A');
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = 'Batman';
    const Ironman = "Ironman";
    console.log(batman);
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No esta presente');
})();
(() => {
    const hero = ['Raven', 23, true];
    hero[0] = 'Aquaman';
    hero[1] = 24;
    hero[2] = false;
    console.log({ hero });
})();
(() => {
    function callBatman() {
    }
    const callSuperman = function () {
    };
    const callRaven = () => {
    };
})();
(() => {
    const fullName = (firtsName, lastName, toUpper = false) => {
        if (toUpper) {
            return ` ${firtsName}, ${lastName || '--'} `.toUpperCase();
        }
        else {
            return ` ${firtsName}, ${lastName || '--'} `.toLowerCase();
        }
    };
    const name = fullName('Rachel', 'Roth', true);
    console.log({ name });
})();
(() => {
    const fullName = (firtsName, lastName) => {
        return ` ${firtsName}, ${lastName || '--'} `;
    };
    const name = fullName('Rachel');
    console.log({ name });
})();
(() => {
    const fullName = (firtsName, lastName) => {
        return ` ${firtsName} ${lastName} `;
    };
    const name = fullName('Rachel', 'Roth');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...args) => {
        return `${firstName} ${args.join(' ')} `;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent', 'Superman');
    console.log({ superman });
})();
(() => {
    const addNumbers = (a, b) => a = b;
    const greet = (name) => `Hi ${name} `;
    const saveTheWorld = () => 'Salva a la porrista, salva al mundo';
    //*let myFunction: Function;
    //*let myFunction: number;
    //*let myFunction: (x: number, y: number) => number;
    //*let myFunction: (name: string) => string;
    let myFunction;
    /* myFunction = 10;
    console.log(myFunction); */
    /* myFunction = addNumbers;
    console.log(myFunction(1,3)); */
    /* myFunction = greet;
    console.log(myFunction('Raven')); */
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
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
(() => {
    let raven = {
        name: 'Raven',
        age: 24,
        powers: ['Psycho powers', 'Telekinesys', 'Transdimensional transport']
    };
    let beastBoy = {
        name: 'beastBoy',
        age: 24,
        powers: ['Psycho powers', 'Telekinesys', 'Transdimensional transport']
    };
})();
(() => {
    let raven = {
        name: 'Raven',
        age: 24,
        powers: ['Psycho powers', 'Telekinesys', 'Transdimensional transport'],
        getName() {
            return this.name;
        }
    };
    let beastBoy = {
        name: 'beastBoy',
        age: 24,
        powers: ['Psycho powers', 'Telekinesys', 'Transdimensional transport'],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    let myCustomVariable = 'Wixie';
    console.log(myCustomVariable);
    myCustomVariable = 20;
    typeof myCustomVariable; // number
    myCustomVariable = 'Slade';
    typeof myCustomVariable; // string
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: ['Any']
    };
    console.log(typeof myCustomVariable); //* Object
    //*porque en Js no existe el typo Type y lo manda como objeto.
})();
(() => {
    // Funciones Básicas
    function sumar(a, b) {
        return a + b;
    }
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = [
        'Flash',
        'Arrow',
        'Superman',
        'Linterna Verde',
    ];
    contar(superHeroes);
    //Parametros por defecto
    const llamarBatman = (llamar) => {
        if (llamar) {
            console.log('Batiseñal activada');
        }
    };
    llamarBatman(true);
    // Rest?
    const unirheroes = (...personas) => {
        return personas.join(', ');
    };
    // Tipo funcion
    const noHaceNada = (numero, texto, booleano, arreglo) => { };
    // Crear el tipo de funcion que acepte la funcion "noHaceNada"
    let noHaceNadaTampoco;
    noHaceNadaTampoco = (n, t, b, arr) => { };
})();
(() => {
    // Objetos
    const batimovil = {
        carroceria: 'Negra',
        modelo: '6x6',
        antibalas: true,
        pasajeros: 4,
    };
    const bumblebee = {
        carroceria: 'Amarillo con negro',
        modelo: '4x2',
        antibalas: true,
        pasajeros: 4,
        disparar() {
            // El metodo disparar es opcional
            console.log('Disparando');
        },
    };
    const villanos = [
        {
            nombre: 'Lex Luthor',
            edad: 54,
            mutante: false,
        },
        {
            nombre: 'Erik Magnus Lehnsherr',
            edad: 49,
            mutante: true,
        },
        {
            nombre: 'James Logan',
            edad: undefined,
            mutante: true,
        },
    ];
    const charles = {
        poder: 'psiquico',
        estatura: 1.78,
    };
    const apocalipsis = {
        lider: true,
        miembros: ['Magneto', 'Tormenta', 'Psylocke', 'Angel'],
    };
    // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
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
