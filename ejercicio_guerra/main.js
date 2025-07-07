let vida_submarino = 2500;
let ataque_submarino =500;
 

let vida_regular = Math.ceil(vida_submarino * (2/12));
let vida_profesional = Math.ceil(vida_submarino * (3/12));
let vida_elite = Math.ceil(vida_submarino * (4/12));
let vida_tanque = Math.ceil(vida_submarino * (7/12));
let vida_helicoptero = Math.ceil(vida_submarino * (8/12));
let vida_avion = Math.ceil(vida_submarino * (10/12));

let ataque_regular = Math.ceil(ataque_submarino * (1/14));
let ataque_profesional = Math.ceil(ataque_submarino * (2/14));
let ataque_elite = Math.ceil(ataque_submarino * (3/14));
let ataque_tanque = Math.ceil(ataque_submarino * (4/14));
let ataque_helicoptero = Math.ceil(ataque_submarino * (5/14));
let ataque_avion = Math.ceil(ataque_submarino * (6/14));

let registro_1= 
{
    ataques_criticos: 0,
    tropas_eliminadas: 
      {
      "Soldado Regular":0,
      "Soldado Profesional":0,
      "Soldado Elite":0,
      "Carro de Tanque":0,
      "Helicoptero de Combate":0,
      "Avion de Combate":0,
      "Submarino":0,
      }
    ,
    ataques_efectivos: 0,
    unidades_perdidas: 0,
    unidades_ilesas: 0,
    unidades_heridas: 0
  };


let registro_2= {
    ataques_criticos: 0,
    tropas_eliminadas: 
      {
      "Soldado Regular":0,
      "Soldado Profesional":0,
      "Soldado Elite":0,
      "Carro de Tanque":0,
      "Helicoptero de Combate":0,
      "Avion de Combate":0,
      "Submarino":0,
      }
    ,
    ataques_efectivos: 0,
    unidades_perdidas: 0,
    unidades_ilesas: 0,
    unidades_heridas: 0
  };




equipo1= generadorEquipo();
console.log("Equipo 1: ", equipo1);
equipo2= generadorEquipo();
console.log("Equipo 2: ", equipo2);


//let ganador = randomGenerator(0,1);
////console.log("Equipo Rojo: ", equipo1.tropas[1]);


iniciarGuerra(equipo1, equipo2);
//prueba();


function prueba(){

    //console.log("iniciando prueba");


let equipo_prueba = {
  "tropas": [
    [ // Escuadrón 1
      {"nombre":"Arquero","activo":false,"vida":0,"ataque":0}, // Inactivo
      {"nombre":"Arquero","activo":true,"vida":50,"ataque":15},
      // {"nombre":"Arquero","activo":true,"vida":50,"ataque":15},
      // {"nombre":"Arquero","activo":true,"vida":50,"ataque":15},
      // {"nombre":"Arquero","activo":true,"vida":50,"ataque":15},
      // {"nombre":"Arquero","activo":true,"vida":50,"ataque":15},
      // {"nombre":"Arquero","activo":true,"vida":50,"ataque":15},
      // {"nombre":"Arquero","activo":true,"vida":50,"ataque":15},

    ],
    // [ // Escuadrón 1
    //   {"nombre":"Arquero","activo":false,"vida":0,"ataque":0}, // Inactivo
    //   {"nombre":"Arquero","activo":true,"vida":50,"ataque":15},
    //   {"nombre":"Arquero","activo":true,"vida":50,"ataque":15},
    //   {"nombre":"Arquero","activo":true,"vida":50,"ataque":15},
    //   {"nombre":"Arquero","activo":true,"vida":50,"ataque":15},
    //   {"nombre":"Arquero","activo":true,"vida":50,"ataque":15},
    //   {"nombre":"Arquero","activo":true,"vida":50,"ataque":15},

    // ],
    // [ // Escuadrón 3
    //   {"nombre":"Caballero","activo":false,"vida":0,"ataque":0}, // Inactivo
    //   {"nombre":"Caballero","activo":false,"vida":0,"ataque":0},
    //   {"nombre":"Caballero","activo":false,"vida":0,"ataque":0},
    //   {"nombre":"Caballero","activo":false,"vida":0,"ataque":0},
    //   {"nombre":"Caballero","activo":false,"vida":0,"ataque":0},
    //   {"nombre":"Caballero","activo":false,"vida":0,"ataque":0},

    // ]
  ]
};

  //console.log("Equipo 1: ", equipo_prueba);
  let equipo_prueba_aux;

  // for (let i = 0; i < equipo_prueba.tropas.length; i++) {
  //             for (let j =equipo_prueba.tropas[i].length; j > 0; j--) {


  //            equipo_prueba_aux= equipo_prueba.tropas[0].splice(j, 1);
  //     }
  // }

  equipo_prueba.tropas[0].splice(1, 1);
  equipo_prueba.tropas[0].splice(1, 1);
  equipo_prueba.tropas[0].splice(1, 1);
    
  //equipo_prueba= equipo_prueba_aux;

  console.log("Equipo aux: despues del splice ", equipo_prueba_aux);
  console.log("Equipo aux tipo ", typeof (equipo2_aux));

  if (typeof (equipo2_aux) != 'undefined') 
{  console.log("ATAQUE EQUIPO 1");

}






}

function iniciarGuerra(equipo1, equipo2) {

  //console.log("guerras iniciada");
  let equipo1_aux = JSON.parse(JSON.stringify(equipo1)); 
  let equipo2_aux = JSON.parse(JSON.stringify(equipo2));

  let turnos =0;
while(true){

  if (tropasRestantes (equipo1_aux) > 0) 
  {  
    console.log("ATAQUE EQUIPO 1");

    atacarEquipo(equipo1_aux, equipo2_aux, registro_1, registro_2);

    if (tropasRestantes(equipo2_aux) <= 0) {
      console.log("Equipo 1 ha GANADO la guerra");
      break;
    }

  }

  else {
    console.log("Equipo 1 ha PERDIDO la guerra");
    break;
  }


  //////////////////////////////////
  //////////////////////////////////
  //////////////////////////////////

  if (tropasRestantes (equipo2_aux) > 0) 
  {  
    console.log("ATAQUE EQUIPO 2");

    atacarEquipo(equipo2_aux, equipo1_aux, registro_2, registro_1);

    if (tropasRestantes(equipo1_aux) <= 0) {
      console.log("Equipo 2 ha GANADO la guerra");
      break;
    }

  }

  else {
    console.log("Equipo 2 ha PERDIDO la guerra");
    break;
  }

  turnos++;
  console.log("numero de turnos: " + turnos);

  console.log("al equipo1 le quedan las siguientes tropas: ", tropasRestantes(equipo1_aux));
  console.log("equipo1: ", equipo1_aux);
  console.log("\n\n");
  console.log("al equipo2 le quedan las siguientes tropas: ", tropasRestantes(equipo2_aux));
  console.log("equipo2: ", equipo2_aux);
  console.log("\n\n");
}

  unidadesHeridasIlesas(registro_1, equipo1_aux);
  unidadesHeridasIlesas(registro_2, equipo2_aux)


  console.log("\n\n");
  console.log("GUERRA FINALIZADA");
  console.log("numero total de turnos: " + turnos);

  console.log("Registro del Equipo 1: ", registro_1);
  console.log("Registro del Equipo 2: ", registro_2);

  

}

function tropasRestantes(equipo) {
    let totalTropas = 0;
    for (const escuadron of equipo.tropas) {
        totalTropas += escuadron.length;
    }
    return totalTropas;
}


function unidadesHeridasIlesas(registro, equipo){
      
  const vida_inicial = {
    "Soldado Regular": vida_regular,
    "Soldado Profesional": vida_profesional,
    "Soldado Elite": vida_elite,
    "Carro de Tanque": vida_tanque,
    "Helicoptero de Combate": vida_helicoptero,
    "Avion de Combate": vida_avion,
    "Submarino": vida_submarino
    };

  for (const escuadron of equipo.tropas) {
    for (const tropa of escuadron) {
      if (tropa.vida == vida_inicial[tropa.nombre]) {
        registro.unidades_ilesas++;
      } else if ((tropa.vida > 0) && (tropa.vida <= (vida_inicial[tropa.nombre] * 0.3))) {
        registro.unidades_heridas++;
      }
    }
  }



}


function atacarEquipo(equipo_atacante, equipo_defensor, registro_atacante, registro_defensor) {

  for (let i = 0; i < equipo_atacante.tropas.length; i++) {
    let escuadron_act = equipo_atacante.tropas[i];

    //if (escuadron_act.length === 0) continue; // Salta escuadrones vacíos
    for (let j = 0; j < escuadron_act.length; j++) {
      // //console.log("Nombre: " + escuadron_act[j].nombre);
      // //console.log("Vida: " + escuadron_act[j].vida);
      let ataque= randomGenerator(1,escuadron_act[j].ataque ); // ataque aleatorio

            if (ataque == escuadron_act[j].ataque) {
        registro_atacante.ataques_criticos++;
      }

      ataque = ataque * (1 - (randomGenerator(0, 30)/100)) // inclemencias del clima



      let escuadron_atacado=0;
      let tropa_atacada=0;



      
      do{
        if (tropasRestantes(equipo_defensor) == 0) {
            return; // El equipo defensor ya no tiene tropas
        }
        escuadron_atacado= randomGenerator(0, (equipo_defensor.tropas.length)-1);
        tropa_atacada= randomGenerator(0, (equipo_defensor.tropas[escuadron_atacado].length)-1);
      }
      while (equipo_defensor.tropas[escuadron_atacado].length === 0 );  



      //console.log("Vida equipo 2 antes del ataque: " +  equipo_defensor.tropas[escuadron_atacado][tropa_atacada].vida);
      //console.log("Tropa atacada: " , equipo_defensor.tropas[escuadron_atacado][tropa_atacada]);

      
      equipo_defensor.tropas[escuadron_atacado][tropa_atacada].vida -= ataque;

      registro_atacante.ataques_efectivos+=ataque;
      //console.log("Ataque: " + ataque);
      //console.log("Tropa atacada: " , equipo_defensor.tropas[escuadron_atacado][tropa_atacada]);
      //console.log("Vida tropa equipo 2 despues del ataque: " +  equipo_defensor.tropas[escuadron_atacado][tropa_atacada].vida);

      if( equipo_defensor.tropas[escuadron_atacado][tropa_atacada].vida <= 0){ 
        //console.log("Tropa eliminada: " + equipo_defensor.tropas[escuadron_atacado][tropa_atacada].nombre);
        let tropa_muerta = equipo_defensor.tropas[escuadron_atacado][tropa_atacada].nombre;
        registro_atacante.tropas_eliminadas[tropa_muerta] ++;
        registro_defensor.unidades_perdidas++;

        equipo_defensor.tropas[escuadron_atacado].splice(tropa_atacada, 1);


      }
    equipo_defensor.tropas = equipo_defensor.tropas.filter(escuadron => escuadron.length > 0);

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



