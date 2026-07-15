const pokemonName = document.querySelector('.pokemon_name');
const pokemnoNumber = document.querySelector('.pokemon_number');
const pokemnoImage = document.querySelector(".pokemon_image");

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  if (APIResponse.status == 200) {
    const data = await APIResponse.json();
  return data;
}
}

const renderPokemon = async (pokemon) => {
  
  pokemonName.innerHTML = 'Loading...'

  const data = await fetchPokemon(pokemon);

  if (data) {
    pokemnoImage.style.display = 'block'
    pokemonName.innerHTML = data.name;
    pokemnoNumber.innerHTML = data.id;
    pokemnoImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    input.value = '';
    searchPokemon = data.id;
  } else {
     pokemnoImage.style.display = 'none'
     pokemonName.innerHTML = 'Not found :c';
     pokemnoNumber.innerHTML = '';
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
  input.value = '';
});

buttonPrev.addEventListener('click', () => {
  if (searchPokemon > 1) {
  searchPokemon -= 1;
  renderPokemon(searchPokemon);
  }
});

buttonNext.addEventListener('click', () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);
