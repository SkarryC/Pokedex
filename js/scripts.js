let pokemonList = [
  { name: "Golbat", height:5, type: ["poison, flying"] },
  { name: "Sandslash", height:3, type: ["ground"] },
  { name: "Squirtle", height:1, type: ["water"] },
];


pokemonList.forEach(function(pokemonList) {
  document.write(pokemonList.name  + " is " + pokemonList.height + " ft. and her type is " + pokemonList.type + ".<br>");
});


