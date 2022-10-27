let pokemonRepository = (function () {
  let pokemonList = [
  { name: "Golbat", height:5, type: ["poison, flying"] },
  { name: "Sandslash", height:3, type: ["ground"] },
  { name: "Squirtle", height:1, type: ["water"] },
];

  function add (pokemon) {
    pokemonList.push(pokemon);
  }


  function getAll() {
    return pokemonList;
  }


  function addListItem (pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function (showDetails) {
    console.log(pokemon);
});
  }

  function showDetails (pokemon) {
    console.log(pokemon)
  }
  
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name:"Pikachu" });

console.log(pokemonRepository.getAll());



pokemonRepository.getAll().forEach(function (pokemon) {
   pokemonRepository.addListItem(pokemon);
});


