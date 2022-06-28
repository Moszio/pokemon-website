const pokemon = [`charmander`, `bulbasaur`, `squirtle`]
const pokemonIDs = [`001`, `002`, `003`]
const containerDiv = document.querySelector(`#container`)

// loop over every ID 
// create an HTML element
// set the HTML element values
// append HTML element to the DOM

pokemonIDs.map((id) => {
let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`
console.log(`img url`, imgUrl)
let div = document.createElement(`div`) 
div.setAttribute(`class`, `pokemon-card`)
let img = document.createElement(`img`) 
img.src = imgUrl
div.append(img) 
document.body.append(div)
containerDiv.append(div)
})