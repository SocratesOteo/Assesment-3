console.log('helloworld')
let color= document.querySelector("#green-button")
let background= document.querySelector("#background")
let favoritePlace = document.querySelector('#favorite-place')
let favoriteEvent = document.querySelector('#favorite-ritual')
let reset = document.querySelector('#reset')

function favoriteColor(evt){
    evt.preventDefault()
background.style.backgroundColor = "green"

}

 color.addEventListener('click', favoriteColor)

 function favoritePlaceBack(evt){
     evt.preventDefault()
    background.style.backgroundImage = "url(space.png)"
 }

 favoritePlace.addEventListener('click', favoritePlaceBack)

 function favoriteEventBack(evt){
     evt.preventDefault()
     background.style.backgroundImage = 'url(theater.jpg)'
 }

favoriteEvent.addEventListener('click',favoriteEventBack)


function resetBackground(evt){
    
    background.style.backgroundColor = 'black'
    
}

reset.addEventListener('click', resetBackground)