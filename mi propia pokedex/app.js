let poke_app = document.getElementById("poke_app"); //contenedor principal

const poke_lista_div = document.getElementById("poke_lista_div"); //contenedor de la lista de pokemones
let tpl_tarjeta = document.getElementById('tarjeta'); //contenedor de la tarjeta
let clon_tarjeta = tpl_tarjeta.content.cloneNode(true);
poke_app.appendChild(clon_tarjeta);

let lista_pokemons = document.getElementById('poke_listado');
let POKE_URL='https://pokeapi.co/api/v2/pokemon/';
let pokemones_favoritos =   [];

let pokemones_completos = [];

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

  poke_lista_div.innerHTML="";
    pokemones_completos.forEach(pokemon => vistaPreviaPokemon(pokemon));
}

function vistaPreviaPokemon(pokemon) {
    let clon_lista = lista_pokemons.content.cloneNode(true);
    const info_poke_listado = clon_lista.querySelector(".info_poke_listado");
    const nombre = clon_lista.getElementById('nombre_poke_lst');
    const imagen_frente = clon_lista.getElementById('imagen_frente_lst');
    const tipo_poke = clon_lista.getElementById('tipo_poke_list');
    const add_favorito = clon_lista.getElementById("anadir_fav");

    nombre.textContent = pokemon.name;
    imagen_frente.src = pokemon.sprites.front_default;

    const tipos = pokemon.types.map(t => t.type.name).join(', ');
    tipo_poke.textContent = tipos;

    add_favorito.dataset.pokemonId = pokemon.id;

       add_favorito.addEventListener("click", ()=>{
        event.stopPropagation();
        toggleFavorito(pokemon.id, add_favorito);
      });

    info_poke_listado.addEventListener("click", ()=>{

      infoTarjeta(pokemon.id)
    });


    poke_lista_div.appendChild(clon_lista);
}


function toggleFavorito(pokemonId, boton_fav) {
    const idNum = parseInt(pokemonId); 

    const index = pokemones_favoritos.indexOf(idNum);

    if (boton_fav.classList.contains('active')) {

        pokemones_favoritos.splice(index, 1);
        boton_fav.classList.remove('active');
    } else {
        pokemones_favoritos.push(idNum);
        boton_fav.classList.add('active');
    }

    console.log(pokemones_favoritos);
    localStorage.setItem('pokemones_favoritos', JSON.stringify(pokemones_favoritos));
}

async function mostrarFavoritos(){

    const poke_fav = pokemones_completos.filter(pokemon => 
        pokemones_favoritos.includes(pokemon.id)
    );
    
    // Renderiza la lista filtrada de favoritos.
    listarPokemones(poke_fav);
}



document.addEventListener('DOMContentLoaded',()=>{
  listado();
  infoTarjeta()
});






document.getElementById('mostrar_todos').addEventListener('click', listado);

document.getElementById('mostrar_favoritos').addEventListener('click', mostrarFavoritos);

