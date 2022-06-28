const pokemon = [
 {name: `Bulbasaur`, id: `001`},
 {name: `Charmander`, id: `004`},
 {name: `Squirtle`, id: `007`},
] // array of objects obj,key,value
const userRoster = []

const containerDiv = document.querySelector(`#container`)
const newBtn = document.querySelector(`#new-pokemon-btn`)
const rosterDiv = document.querySelector(`#roster`)

newBtn.addEventListener(`click`, async () => {
let num = prompt(`ENTER A POKEMON NUMBER`)
console.log(`number entered`, num)
let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${num}.png`
let dataUrl = `https://pokeapi.co/api/v2/pokemon/${num}`
let req = await fetch(dataUrl)
let res = await req.json()
let name = res.forms[0].name
let audioUrl = `https://play.pokemonshowdown.com/audio/cries/${name.toLowerCase()}.mp3`
let audio = document.createElement(`audio`)
let source = document.createElement(`source`)
source.setAttribute(`src`, audioUrl)
source.setAttribute(`type`, `audio/mpeg`) 
audio.append(source)
let h3 = document.createElement(`h3`)
h3.innerText = name
let img = document.createElement(`img`)
img.setAttribute(`src`, imgUrl) 
img.setAttribute(`class`, `roster-img`)
let position = document.querySelector(`#pokemon-${userRoster.length + 1}`)
position.addEventListener(`click`, () => {
 audio.play()
})
position.append(img, h3, audio)
userRoster.push(num)
})

// loop over every ID 
// create an HTML element
// set the HTML element values
// append HTML element to the DOM

const createPokemon = (pokemonName, imgUrl) => {
let div = document.createElement(`div`) 
let h3 = document.createElement(`h3`)
h3.innerText = pokemonName
div.setAttribute(`class`, `pokemon-card`)
let img = document.createElement(`img`) 
let audioUrl = `https://play.pokemonshowdown.com/audio/cries/${pokemonName.toLowerCase()}.mp3`
let audio = document.createElement(`audio`)
let source = document.createElement(`source`)
source.setAttribute(`src`, audioUrl)
source.setAttribute(`type`, `audio/mpeg`) //what type of audioo to use
audio.append(source)
div.addEventListener(`click`, () => {
 div.classList.add(`animate__animated`)
 div.classList.add(`animate__shakeX`)
 setTimeout(() => {
  div.classList.remove(`animate__animated`)
  div.classList.remove(`animate__shakeX`)
 }, 1300)
 audio.play()
})
img.src = imgUrl
div.append(img, h3, audio) 
return div;
}

pokemon.map((element, index) => { // index is a counter variable
console.log(element) //fragile code
let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${element.id}.png`
const pokemonElement = createPokemon(element.name, imgUrl)
containerDiv.append(pokemonElement)
})


