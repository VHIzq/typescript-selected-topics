"use strict";
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutant {
        saveWorld() {
            return 'World is saved';
        }
    }
    class Villain extends Mutant {
        conquerWorld() {
            return 'World is conquerested';
        }
    }
    const bb = new Xmen('Beast Boy', 'Garfield');
    //console.log( bb.saveWorld() );
    const bee = new Villain('bee', 'Kayle');
    //console.log(bee.conquerWorld());
    const printName = (character) => {
        //console.log(character.realName)
    };
    printName(bb);
})();
(() => {
    class Titan {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getRealName() {
            return this.name;
        }
        bio() {
            return `${this.name} belongs to ${this.team} team `;
        }
    }
    /* private name!: string;
    public team!: string;
    public realName!: string; */
    Titan.age = 23;
    const kary = new Titan('starfire', 'teen titans', 'Kory Cors');
    //console.log(kary.bio());
    // console.log(Titan.age );
    //  console.log(Titan.age);
    //console.log(Titan.getRealName());
})();
(() => {
    class Titan {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Titan constructor called');
        }
        getFullName() {
            return `${this.name} ${this.realName} `;
        }
    }
    class Xmen extends Titan {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            //console.log('Constructor Xmen');
        }
        get fullName() {
            return `${this.name} -  ${this.realName} `;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('Ur name is not as cool as mine');
            }
            this.name = name;
        }
        getFullNameFromXmen() {
            console.log(super.getFullName());
        }
    }
    const wolverine = new Xmen('Wlverine', 'Logan', true);
    //wolverine.getFullNameFromXmen();
    wolverine.fullName = 'VHMI';
    /* console.log(wolverine.fullName); */
    /* const nuevoHeroe = new Titan('Xia', 'IA')
    nuevoHeroe.realName */
})();
(() => {
    class Titan {
        constructor(name) {
            this.name = name;
        }
        static callTerra() {
            if (!Titan.instance) {
                Titan.instance = new Titan('He Regresado como un cons privado Raven!');
            }
            return Titan.instance;
        }
    }
    //const terra = new Titan('Hi Beast Boy, my name is Terra');
    const terraGF = Titan.callTerra();
    const terraGF2 = Titan.callTerra();
    console.log(terraGF);
    console.log(terraGF2);
})();
