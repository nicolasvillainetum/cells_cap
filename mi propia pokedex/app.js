let tpl = document.getElementById('tarjeta');
let clon = tpl.content.cloneNode(true);
document.body.appendChild(clon);

let lista_pokemons = document.getElementById('poke_listado');
let POKE_URL='https://pokeapi.co/api/v2/pokemon/';

async function infoTarjeta(poke_id) { 
    const elemento_nombre = document.getElementById('nombre_poke');

    const imagen_frente = document.getElementById('imagen_frente');
    const imagen_lateral = document.getElementById('imagen_lateral');
    const imagen_shiny = document.getElementById('imagen_shiny');

    const info_poke = document.getElementById('info_poke');

    if(poke_id==null){
    imagen_frente.alt = "...";
    imagen_lateral.alt = "...";
    imagen_shiny.alt = "...";

    info_poke.textContent = "...";
    return;
    }

  try{  

    const { name, sprites, abilities } = await (await fetch(POKE_URL+poke_id)).json();
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


async function listado() { 
    
    const POKE_URL_LIST='https://pokeapi.co/api/v2/pokemon/';
    const LIMIT = 10;

    let pokemones_completos = [];

  try{  

    const response = await fetch(`${POKE_URL_LIST}?limit=${LIMIT}`);
    const data = await response.json();
    const pokemons_data = data.results;


    const pokemones_url = pokemons_data.map(async (p) => {
        const res = await fetch(p.url);
        return res.json();
    });

    pokemones_completos = await Promise.all(pokemones_url);
    listarPokemones(pokemones_completos);

} catch (error) {
  console.error('Error al obtener el nombre:', error);
  return;}
  
}

function listarPokemones(pokemones_completos){
    pokemones_completos.forEach(pokemon => vistaPreviaPokemon(pokemon));
}

function vistaPreviaPokemon(pokemon) {
    let clon_lista = lista_pokemons.content.cloneNode(true);
    const info_poke_listado = clon_lista.querySelector(".info_poke_listado");



    const nombre = clon_lista.getElementById('nombre_poke_lst');
    const imagen_frente = clon_lista.getElementById('imagen_frente_lst');
    const tipo_poke = clon_lista.getElementById('tipo_poke_list');

    nombre.textContent = pokemon.name;
    imagen_frente.src = pokemon.sprites.front_default;

    const tipos = pokemon.types.map(t => t.type.name).join(', ');
    tipo_poke.textContent = tipos;


    info_poke_listado.addEventListener("click", ()=>{

      infoTarjeta(pokemon.id)
    });


    document.body.appendChild(clon_lista);
}
document.addEventListener('DOMContentLoaded',()=>{
  listado();
  infoTarjeta()
});
//document.addEventListener('DOMContentLoaded', listado);
