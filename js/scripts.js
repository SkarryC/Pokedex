let pokemonList = [
  { name: "Golbat", height:5, type: ["poison, flying"] },
  { name: "Sandslash", height:3, type: ["ground"] },
  { name: "Squirtle", height:1, type: ["water"] },
];



for (let i = 0;
 i < pokemonList.length; i++) 

if (pokemonList[i].height > 4.5) {
    document.write(pokemonList[i].name + " is " + pokemonList[i].height + " ft. Wow, that's big! Her type is " + pokemonList[i].type + ".<br>")
  }

else if (pokemonList[i].height < 4) {
    document.write(pokemonList[i].name + " is " + pokemonList[i].height + " ft. and her type is " + pokemonList[i].type + ".<br>")
  }