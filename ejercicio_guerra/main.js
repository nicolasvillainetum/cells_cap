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
//console.log("Equipo Rojo: ", JSON.stringify(equipo1));
equipo2= generadorEquipo();
//console.log("Equipo 2: ", equipo2);


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
      {"nombre":"Arquero","activo":true,"vida":50,"ataque":15},
      {"nombre":"Arquero","activo":true,"vida":50,"ataque":15},
      {"nombre":"Arquero","activo":true,"vida":50,"ataque":15},
      {"nombre":"Arquero","activo":true,"vida":50,"ataque":15},
      {"nombre":"Arquero","activo":true,"vida":50,"ataque":15},
      {"nombre":"Arquero","activo":true,"vida":50,"ataque":15},

    ],
    [ // Escuadrón 1
      {"nombre":"Arquero","activo":false,"vida":0,"ataque":0}, // Inactivo
      {"nombre":"Arquero","activo":true,"vida":50,"ataque":15},
      {"nombre":"Arquero","activo":true,"vida":50,"ataque":15},
      {"nombre":"Arquero","activo":true,"vida":50,"ataque":15},
      {"nombre":"Arquero","activo":true,"vida":50,"ataque":15},
      {"nombre":"Arquero","activo":true,"vida":50,"ataque":15},
      {"nombre":"Arquero","activo":true,"vida":50,"ataque":15},

    ],
    [ // Escuadrón 3
      {"nombre":"Caballero","activo":false,"vida":0,"ataque":0}, // Inactivo
      {"nombre":"Caballero","activo":false,"vida":0,"ataque":0},
      {"nombre":"Caballero","activo":false,"vida":0,"ataque":0},
      {"nombre":"Caballero","activo":false,"vida":0,"ataque":0},
      {"nombre":"Caballero","activo":false,"vida":0,"ataque":0},
      {"nombre":"Caballero","activo":false,"vida":0,"ataque":0},

    ]
  ]
};

  //console.log("Equipo 1: ", equipo_prueba);
  let equipo_prueba_aux;

  for (let i = 0; i < equipo_prueba.tropas.length; i++) {
              for (let j =equipo_prueba.tropas[i].length; j > 0; j--) {


             equipo_prueba_aux= equipo_prueba.tropas[0].splice(j, 1);
      }
  }

    
  equipo_prueba= equipo_prueba_aux;

  //console.log("Equipo aux: despues del splice ", equipo_prueba_aux);
  //console.log("Equipo 1: despues del splice ", equipo_prueba);
}

function iniciarGuerra(equipo1, equipo2) {

  //console.log("guerras iniciada");
  let equipo1_aux= equipo1;
  let equipo2_aux = equipo2;

  let ganador= false;

while(!ganador){
  console.log("ATAQUE EQUIPO 1");
  for (let i = 0; i < equipo1.tropas.length; i++) {
    let escuadron_act = equipo1.tropas[i];
    for (let j = 0; j < escuadron_act.length; j++) {


      // //console.log("Nombre: " + escuadron_act[j].nombre);
      // //console.log("Vida: " + escuadron_act[j].vida);
      let ataque= randomGenerator(1,escuadron_act[j].ataque ); // ataque aleatorio
      ataque = ataque * (1 - (randomGenerator(0, 30)/100)) // inclemencias del clima

      let escuadron_atacado=0;
      let tropa_atacada=0;
      
      do{
                if ((equipo2_aux.tropas.length == 0)){break;}

        escuadron_atacado= randomGenerator(0, (equipo2_aux.tropas.length)-1);
        tropa_atacada= randomGenerator(0, (equipo2_aux.tropas[escuadron_atacado].length)-1);
      }
      while( (typeof (equipo2_aux.tropas[escuadron_atacado][tropa_atacada]) =='undefined') && (equipo2_aux.tropas.length > 0) );      
      

      //console.log("Vida equipo 2 antes del ataque: " +  equipo2_aux.tropas[escuadron_atacado][tropa_atacada].vida);
      //console.log("Tropa atacada: " , equipo2_aux.tropas[escuadron_atacado][tropa_atacada]);

      
      equipo2_aux.tropas[escuadron_atacado][tropa_atacada].vida -= ataque;
      //console.log("Ataque: " + ataque);
      //console.log("Tropa atacada: " , equipo2_aux.tropas[escuadron_atacado][tropa_atacada]);
      //console.log("Vida tropa equipo 2 despues del ataque: " +  equipo2_aux.tropas[escuadron_atacado][tropa_atacada].vida);

      if( equipo2_aux.tropas[escuadron_atacado][tropa_atacada].vida <= 0){ 
        //console.log("Tropa eliminada: " + equipo2_aux.tropas[escuadron_atacado][tropa_atacada].nombre);
        equipo2_aux.tropas[escuadron_atacado].splice(tropa_atacada, 1);
                if ((equipo2_aux.tropas.length == 0)){break;}


      }

                    if ((equipo2_aux.tropas.length == 0)){break;}



    }

  }

  //equipo2= equipo2_aux;

    console.log("equipo2 despues del ataque: ", equipo2_aux);


  if((equipo2_aux.tropas.length == 0)){
    console.log("Equipo 1 ha ganado la guerra");
    ganador = true;
    break;
  }

    console.log("ATAQUE EQUIPO 2");

  for (let i = 0; i < equipo2_aux.tropas.length; i++) {
    let escuadron_act = equipo2_aux.tropas[i];
    for (let j = 0; j < escuadron_act.length; j++) {


      // //console.log("Nombre: " + escuadron_act[j].nombre);
      // //console.log("Vida: " + escuadron_act[j].vida);
      let ataque= randomGenerator(1,escuadron_act[j].ataque ); // ataque aleatorio
      ataque = ataque * (1 - (randomGenerator(0, 30)/100)) // inclemencias del clima

      let escuadron_atacado=0;
      let tropa_atacada=0;
      
      do{

        if ((equipo1_aux.tropas.length == 0)){break;}

        escuadron_atacado= randomGenerator(0, (equipo1_aux.tropas.length)-1);
        tropa_atacada= randomGenerator(0, (equipo1_aux.tropas[escuadron_atacado].length)-1);
      }
      while( (typeof (equipo1_aux.tropas[escuadron_atacado][tropa_atacada]) =='undefined')  );      
      

      //console.log("Vida equipo 2 antes del ataque: " +  equipo1_aux.tropas[escuadron_atacado][tropa_atacada].vida);
      //console.log("Tropa atacada: " , equipo1_aux.tropas[escuadron_atacado][tropa_atacada]);

      
      equipo1_aux.tropas[escuadron_atacado][tropa_atacada].vida -= ataque;
      //console.log("Ataque: " + ataque);
      //console.log("Tropa atacada: " , equipo1_aux.tropas[escuadron_atacado][tropa_atacada]);
      //console.log("Vida tropa equipo 2 despues del ataque: " +  equipo1_aux.tropas[escuadron_atacado][tropa_atacada].vida);

      if( equipo1_aux.tropas[escuadron_atacado][tropa_atacada].vida <= 0){ 
        //console.log("Tropa eliminada: " + equipo1_aux.tropas[escuadron_atacado][tropa_atacada].nombre);
        equipo1_aux.tropas[escuadron_atacado].splice(tropa_atacada, 1);

                if ((equipo1_aux.tropas.length == 0)){break;}


      }

            if ((equipo1_aux.tropas.length == 0)){break;}



    }

  }

    if((equipo1_aux.tropas.length == 0)){
    console.log("Equipo 2 ha ganado la guerra");
    ganador = true;
    break;
  }

      console.log("equipo1 despues del ataque: ", equipo1_aux);


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



