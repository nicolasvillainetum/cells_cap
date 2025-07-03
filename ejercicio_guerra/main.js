let vida_submarino = 2500;
let ataque_submarino =500;
 

let vida_regular = Math.ceil(vida_submarino * (2/12));
let vida_profesional = Math.ceil(vida_submarino * (3/12));
let vida_elite = Math.ceil(vida_submarino * (4/12));
let vida_tanque = Math.ceil(vida_submarino * (7/12));
let vida_helicoptero = Math.ceil(vida_submarino * (8/12));
let vida_avion = Math.ceil(vida_submarino * (10/12));

let ataque_regular = ataque_submarino * (1/14);
let ataque_profesional = ataque_submarino * (2/14);
let ataque_elite = ataque_submarino * (3/14);
let ataque_tanque = ataque_submarino * (4/14);
let ataque_helicoptero = ataque_submarino * (5/14);
let ataque_avion = ataque_submarino * (6/14);

let registro_azul= [];
let registro_rojo= [];




equipo1= generadorEquipo();
console.log("Equipo Rojo: ", equipo1);
equipo2= generadorEquipo();
console.log("Equipo Azul: ", equipo2);


//let ganador = randomGenerator(0,1);
//console.log("Equipo Rojo: ", equipo1.tropas[1]);


iniciarGuerra(equipo1, equipo2);

function iniciarGuerra(equipo1, equipo2) {

  console.log("guerras iniciada");
  console.log("longitud equipo rojo: ", equipo1.tropas[1].length);

  for (let i = 0; i < equipo1.tropas.length; i++) {
    let escuadron_act = equipo1.tropas[i];
    console.log("Tropa " + (i + 1) + ":");
    for (let j = 0; j < escuadron_act.length; j++) {

      console.log("Nombre: " + escuadron_act[j].nombre);
      console.log("Vida: " + escuadron_act[j].vida);
      let ataque= randomGenerator(1,escuadron_act[j].ataque ); // Simula un ataque aleatorio
      ataque = ataque * (1 - (randomGenerator(0, 30)/100)) // Simula un ataque aleatorio 
      console.log("Ataque: " + ataque);

      let tropa_atacada= randomGenerator(0,equipo2.tropas[i].length-1);
      console.log("Vida tropa equipo 2: " +  equipo2.tropas[i][tropa_atacada].vida);

      equipo2.tropas[i][tropa_atacada].vida -= ataque;

      if( equipo2.tropas[i][tropa_atacada].vida <= 0){ 
        console.log("Tropa eliminada: " + equipo2.tropas[i][tropa_atacada].nombre);
        equipo2.tropas[i].splice(tropa_atacada, 1);

      }
    }

  }



  for (let i = 0; i < equipo2.tropas.length; i++) {
    let escuadron_act = equipo2.tropas[i];
    console.log("Tropa " + (i + 1) + ":");
    for (let j = 0; j < escuadron_act.length; j++) {

      console.log("Nombre: " + escuadron_act[j].nombre);
      console.log("Vida: " + escuadron_act[j].vida);
      let ataque= randomGenerator(1,escuadron_act[j].ataque ); // Simula un ataque aleatorio
      ataque = ataque * (1 - (randomGenerator(0, 30)/100)) // Simula un ataque aleatorio 
      console.log("Ataque: " + ataque);

      let tropa_atacada= randomGenerator(0,equipo1.tropas[i].length-1);
      console.log("Vida tropa equipo 2: " +  equipo1.tropas[i][tropa_atacada].vida);

      equipo1.tropas[i][tropa_atacada].vida -= ataque;

      if( equipo1.tropas[i][tropa_atacada].vida <= 0){ 
        console.log("Tropa eliminada: " + equipo1.tropas[i][jtropa_atacada].nombre);
        equipo1.tropas[i].splice(tropa_atacada, 1);

      }
    }

  }



}




function generadorEquipo(){
  let n_regulares= randomGenerator(500, 1000);
  let n_profesionales= randomGenerator(500, 1000);
  let n_elite= randomGenerator(200, 300);
  let n_tanque= randomGenerator(50, 100);
  let n_helicoptero= randomGenerator(30, 50);
  let n_avion= randomGenerator(50, 75);
  let n_submarino= randomGenerator(1,2);



  let regulares_aux= [];
  let profesionales_aux=[];
  let elite_aux=[];
  let tanque_aux=[];
  let helicoptero_aux=[];
  let avion_aux=[];
  let submarino_aux=[];

   for (let i = 0; i < n_regulares; i++) {
    regulares_aux.push(soldadosRegulares());}
  for (let i = 0; i < n_profesionales; i++) {
    profesionales_aux.push(soldadosProfesionales());}
  for (let i = 0; i < n_elite; i++) {
    elite_aux.push(soldadosElite());}
  for (let i = 0; i < n_tanque; i++) {
    tanque_aux.push(carroTanque());}
  for (let i = 0; i < n_helicoptero; i++) {
    helicoptero_aux.push(helicoptero());}
  for (let i = 0; i < n_avion; i++) {
    avion_aux.push(avionCombate());}

  for (let i = 0; i < n_submarino; i++) {
    submarino_aux.push(submarino());}

 

  return {
    tropas: [
      regulares_aux,
      profesionales_aux,
      elite_aux,
      tanque_aux,
      helicoptero_aux,
      avion_aux,
      submarino_aux,
     
    ]
  };
}






function randomGenerator(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function soldadosRegulares(){
  
  return {
    nombre: "Soldado Regular",

    vida: vida_regular,
    ataque: ataque_regular,
  };

}

function soldadosProfesionales(){
    return {
    nombre: "Soldado Profesional",
    vida: vida_profesional,
    ataque: ataque_profesional,
  };

}

function soldadosElite(){  
    return {
    nombre: "Soldado Elite",
    vida: vida_elite,
    ataque: ataque_elite,
  };
}

function carroTanque(){

    return {
    nombre: "Carro de Tanque",
    vida: vida_regular,
    ataque: ataque_regular,
  };

}

function helicoptero(){

    return {
    nombre: "Helicoptero de Combate",
    vida: vida_helicoptero,
    ataque: ataque_helicoptero,
  };

}

function avionCombate(){

    return {
    nombre: "Avion de Combate",
    vida: vida_avion,
    ataque: ataque_avion,
  };

}

function submarino(){

    return {
    nombre: "Submarino",
    vida: vida_submarino,
    ataque: ataque_submarino,
  };
}



