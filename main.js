//define a function
function sayDontPoke() {
    alert('dont poke the fox');
}

// refer to a function - assign it to onclick
document.querySelector('img').onclick = sayDontPoke

// call the function when the page loads
sayDontPoke()
