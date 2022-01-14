console.log('helloworld')
let color= document.querySelector("#green-button")
let background= document.querySelector("#background")
let favoritePlace = document.querySelector('#favorite-place')
let favoriteEvent = document.querySelector('#favorite-ritual')
let reset = document.querySelector('#reset')

function favoriteColor(evt){
    evt.preventDefault()
    background.style.backgroundImage = 'none'
    background.style.backgroundColor = "green"
    alert('favorite color is green')

}

 color.addEventListener('click', favoriteColor)

 function favoritePlaceBack(evt){
     evt.preventDefault()
    background.style.backgroundImage = "url(space.png)"
    alert('my favorite place is space')
 }

 favoritePlace.addEventListener('click', favoritePlaceBack)

 function favoriteEventBack(evt){
     evt.preventDefault()
     background.style.backgroundImage = 'url(theater.jpg)'
     alert('my favorite thing to do is going to the movie theaters')
 }

favoriteEvent.addEventListener('click',favoriteEventBack)


function resetBackground(evt){
    background.style.backgroundImage = 'none'
    background.style.backgroundColor = 'black'
    alert('changing back to reset')
    
}

reset.addEventListener('click', resetBackground)