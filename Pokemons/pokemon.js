async function allPokemonData() {
  let response = await fetch("pokemon.json");
  let data = response.json();
  return data;
}

function getPokemonHtml(pokemon) {
  return `
      <div class="a-pokemon-id">${pokemon.id}</div>
      <div class="a-pokemon-name">${pokemon.name.english}</div>
      <div class="a-pokemon-type">${pokemon.type.join(" / ")}</div>
      <div class="a-pokemon-stat">HP: ${pokemon.base.HP}</div>
      <div class="a-pokemon-stat">Attack: ${pokemon.base.Attack}</div>
      <div class="a-pokemon-stat">Defense: ${pokemon.base.Defense}</div>
      <div class="a-pokemon-stat">Speed: ${pokemon.base.Speed}</div>
      <div class='a-pokemon-chinese'>Chinese: ${pokemon.name.chinese}</div>
      <div class='a-pokemon-japanese'>Japanese: ${pokemon.name.japanese}</div>
      <div class='a-pokemon-french'>French: ${pokemon.name.french}</div>
      `;
}

function displayPokedex(allPokemons) {
  document.body.innerHTML = `
      <div class='pokedex'> 
      <div class='a-pokemon'>
      ${allPokemons.map(getPokemonHtml).join("")}
      </div>
      </div>
      `;
}

allPokemonData().then(displayPokedex);
