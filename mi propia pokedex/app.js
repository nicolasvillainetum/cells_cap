
  let tpl = document.getElementById('tarjeta');
  let nuevoClon = tpl.content.cloneNode(true);
  let clon = tpl.content.cloneNode(true);

  document.body.appendChild(clon);

let POKE_URL='https://pokeapi.co/api/v2/pokemon/1';


async function nombre() { 
    const elemento_nombre = document.getElementById('nombre_poke');

    const imagen_frente = document.getElementById('imagen_frente');
    const imagen_lateral = document.getElementById('imagen_lateral');
    const imagen_shiny = document.getElementById('imagen_shiny');

    const info_poke = document.getElementById('info_poke');

  try{  

    const { name, sprites, abilities } = await (await fetch(POKE_URL)).json();
    elemento_nombre.textContent = name;

    imagen_frente.src = sprites.front_default;
    imagen_lateral.src = sprites.back_default;
    imagen_shiny.src = sprites.front_shiny;  

    info_poke.textContent= abilities[0].ability.name;


} catch (error) {
  console.error('Error al obtener el nombre:', error);
    elemento_nombre.textContent = "error al cargar el nombre";
    imagen_frente.alt = "error al cargar el contenido";
    imagen_lateral.alt = "error al cargar el contenido";
    imagen_shiny.alt = "error al cargar el contenido";

    info_poke.textContent = "error al cargar el contenido";
  return;}
  
}


// document.addEventListener('DOMContentLoaded', habilidades);
document.addEventListener('DOMContentLoaded', nombre);
