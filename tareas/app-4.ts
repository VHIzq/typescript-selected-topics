// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)'

interface Car {
  encender: boolean;
  velocidadMaxima: number;
  acelear: () => void;
}
 
const conducirBatimovil = ( auto: Car ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil: Car = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Guason {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean
}

const guason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface CiudadGoticaFn{
  (ciudadanos: string[]): string
}
const ciudadGotica = ( ciudadanos:CiudadGoticaFn ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

enum Sexo {
  male,
  female
}

enum EstadoCivil {
  soltero,
  casado,
  union
}

interface Identidad {
  nombre: string;
  edad: number;
  sexo: Sexo
  estadoCivil: EstadoCivil
  imprimirBio: () => void
}

/*
  propiedades:
    -nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Espia implements Identidad {
    nombre: string;
    edad: number;
    sexo: Sexo
    estadoCivil: EstadoCivil
    imprimirBio() {
      console.log('Spy!');
    }
}