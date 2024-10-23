// 👉 Crear un input de tipo number ,un botón y un contenedor vacío tal como hicimos en las entregas anteriores.

// 👉 Con el número que se ponga, hacer una llamada a la pokeapi y renderizar una card con los datos del Pokémon encontrado. Lo mínimo que deberá tener la card es el nombre, su tipo principal (pueden intentar poner todos) , su altura y peso (expresada en metros y kilogramos, tendrán que dividir el alto y peso que les llegue por 10), y una de sus imágenes.

// 👉 En caso de que no se encuentre ningún pokemon, renderizar un mensaje de error. En caso de que no se ingrese un número, renderizar otro mensaje de error acorde.

// Les dejamos un ejemplo de como puede ser la llamada a la API:
// 👉 https://pokeapi.co/api/v2/pokemon/890

// Revisen la API (https://pokeapi.co/) , investiguen el objeto y vean como conseguir los datos que necesitan.

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

// CREAMOS LA FUNCION PARA LLAMAR A LA API
const formSearch = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    // if (!response) return;

    // console.log(response);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    container.innerHTML = `El Pokemon buscado no existe`;
  }
  //   return;
  //   console.log(inputSearched);
};

// formSearch();
// el formSearch lo comentamos porque no lo vamos a usar aca
