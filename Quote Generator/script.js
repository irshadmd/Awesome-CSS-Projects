let quote = document.querySelector(".quote");
let author = document.querySelector(".author .name");
const button = document.querySelector(".btn");

// random quote function
function randomQuote(){
    button.classList.add("loading");
    button.innerHTML = "Loading Quote..."
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then((result) => {
        quote.innerHTML = result.content;
        author.innerHTML = result.author;
        button.innerHTML = "Next Quote";
        button.classList.remove("loading");
    })
}

button.addEventListener('click', randomQuote);