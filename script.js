let jokeBtn = document.getElementById("jokeBtn");
let joke = document.getElementById("joke");

jokeBtn.addEventListener( 'click', () => {
fetch("https://api.chucknorris.io/jokes/random")
.then( (response) => response.json())
.then( (data) => joke.innerText = data.value)
.catch( err => console.log(err))
});