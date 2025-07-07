

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))



class Usuario { //clase 
  constructor(nombre, edad, ciudad) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
  }

  mostrarInformacion= () => {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Ciudad: ${this.ciudad}`); //funcion flecha
  }


}

export default function crearUsuario() { //modulo 

  const usuario= {
  nombre: 'Nicolas Villa',
  edad: 25,
  ciudad: 'Armenia'};

const { nombre, edad, ciudad } = usuario; //desestructuracion de objeto

const usuario1 = new Usuario(nombre, edad, ciudad);

usuario1.mostrarInformacion();

let nuevo_usuario = {...usuario} //operador spread
  console.log("Nuevo usuario: ", nuevo_usuario);


  const usuario2= {
  nombre: 'maria',
  edad: 26,
  ciudad: 'Armenia'};

    const usuario3= {
  nombre: 'fernanda',
  edad: 27,
  ciudad: 'Armenia'};

    const usuario4= {
  nombre: 'lala',
  edad: 28,
  ciudad: 'Armenia'};

    const usuario5= {
  nombre: 'lolo',
  edad: 29,
  ciudad: 'Armenia'};


const usuarios = [usuario2, usuario3, usuario4, usuario5,]; //array de objetos


console.log("Usuarios: ", usuarios);

for (const user of usuarios) { //for of
  console.log("usuario: ", user.nombre);}
}

crearUsuario();

async function mostrarPosts() { //promesas

  const elemento_posts = document.getElementById('body_post_api');

  try{  
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const posts = await response.json();
  const mi_post = posts.body;

  console.log("body del post: ", mi_post);
  elemento_posts.textContent = mi_post;


} catch (error) {
  console.error('Error al obtener los posts:', error);
    elemento_posts.textContent = "error al cargar el contenido del post";

  return;}
  
}

async function getimagen() {

    const link_imagen = 'https://picsum.photos/600/300?random=1';

    const elemento_imagen = document.getElementById('imagen_api');

    try {
      // const response = await fetch('https://picsum.photos/600/300?random=1');
      // const foto = await response.json();
      elemento_imagen.src = link_imagen;
    }
    catch (error) {
      console.error('Error al obtener la imagen:', error);
      elemento_imagen.alt = 'Error al cargar la imagen';
    }


  }

document.addEventListener('DOMContentLoaded', getimagen);
document.addEventListener('DOMContentLoaded', mostrarPosts);
