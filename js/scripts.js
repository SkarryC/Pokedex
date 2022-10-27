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

  return {
    add: add,
    getAll: getAll
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name:"Pikachu" });
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemonList) { document.write(pokemonList.name  + " is " + pokemonList.height + " ft. and her type is " + pokemonList.type + ".<br>");
});