console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been Submitted Congratulations')
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function duckMouseover(evt){
	evt.preventDefault()
	alert('you are awesome')
}

let duckImg = document.querySelector('#duck-image')

duckImg.addEventListener('mouseover',duckMouseover)