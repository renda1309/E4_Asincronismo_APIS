const form = document.querySelector(".form");
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const container = document.querySelector(".container");
const styleContainer = document.querySelector(".style_container");
console.log(styleContainer);

// const numberSelect = (pokemon) => {
//   const pokemonSelect = input.value;
//   return;
// };

const templatePokemon = (pokemon) => {
  const { sprites, name, types, height, weight } = pokemon;
  container.innerHTML = `<div class="info_container">
    <img src="${sprites.front_default}">
    <h1>${name.toUpperCase()}</h1>
    <p > Tipo: 
    ${types.map((type) => `<span>${type.type.name}</span>`).join(" / ")}</p>
    <p>Su altura: ${height / 10} metros </p>
    <p>Su peso: ${weight / 10} kilos</p>
 </div>`;
};
// Si al container.innerHTML le agrego un +junto al = se van a ir agregando los pokemon en la busqueda, en lugar de mostrar solo 1, se muestran todos los que vamos buscando

const renderCard = async (e) => {
  e.preventDefault();
  const inputValue = input.value;

  if (!inputValue) {
    container.innerHTML = `Por favor ingresa un numero para buscar tu Pokemon`;
  }
  if (!inputValue) {
    styleContainer.classList.add("show_pokemon");
  }
  if (inputValue < 1) {
    styleContainer.classList.add("show_pokemon");
  } else {
    styleContainer.classList.remove("show_pokemon");
  }

  //   else {
  //     renderCard.classList.remove("no_show_pokemon");
  //   }
  const pokemon = await formSearch(inputValue);
  //   console.log(pokemon);
  templatePokemon(pokemon);
  form.reset();
};

// renderCard();

const init = () => {
  form.addEventListener("submit", renderCard);
};

init();
