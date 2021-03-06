const pokemon = [
 {name: `Bulbasaur`, id: `001`},
 {name: `Charmander`, id: `004`},
 {name: `Squirtle`, id: `007`},
] // array of objects obj,key,value
const userRoster = []

const containerDiv = document.querySelector(`#container`)
const newBtn = document.querySelector(`#new-pokemon-btn`)
const rosterDiv = document.querySelector(`#roster`)
const removeBtn = document.querySelector(`#remove-pokemon-btn`)

function addZeroes(numAdded) {
   if (numAdded.length === 1) {
     return `00`+ numAdded
   } else if (numAdded.length === 2) {
     return `0` + numAdded
   } else {
     return numAdded
   }
}
 
newBtn.addEventListener(`click`, async () => {
 if (userRoster.length < 6) {
  let num = prompt(`ENTER A POKEMON NUMBER`)
  console.log(`number entered`, num)
  addedNum = addZeroes(num)
  let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${addedNum}.png`
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
  let btn = document.createElement(`button`)
  btn.innerText = `Delete`
  let items = (img)
  btn.addEventListener(`click`, () => items.remove())
  removeBtn.addEventListener(`click`, () => position.remove())
  let position = document.querySelector(`#pokemon-${userRoster.length + 1}`)
  position.addEventListener(`click`, () => {
  audio.play()
  })
  position.append(img, h3,)
  h3.append(btn)
  userRoster.push(num)
}
})


/*function() {
  if(userRoster === 0) {
    console.log(alert(`There is nothing to delet!`))
  } else {
      let length = userRoster
    let grab = userRoster.querySelector(`pokemon-${length}`)
    
  }

 })*/


// loop over every ID 
// create an HTML element
// set the HTML element values
// append HTML element to the DOM


pokemon.map((element, index) => { // index is a counter variable
console.log(element) //fragile code
let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${element.id}.png`
let div = document.createElement(`div`) 
let h3 = document.createElement(`h3`)
h3.innerText = element.name
div.setAttribute(`class`, `pokemon-card`)
let img = document.createElement(`img`) 
let audioUrl = `https://play.pokemonshowdown.com/audio/cries/${element.name.toLowerCase()}.mp3`
let audio = document.createElement(`audio`)
let source = document.createElement(`source`)
source.setAttribute(`src`, audioUrl)
source.setAttribute(`type`, `audio/mpeg`) //what type of audioo to use
audio.append(source)
div.addEventListener(`click`, () => {
 console.log(`audio`, audioUrl)
 audio.play()
})
img.src = imgUrl
div.append(img, h3) 
containerDiv.append(div)
})

