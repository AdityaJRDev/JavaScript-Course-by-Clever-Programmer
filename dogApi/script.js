// DOG API
// https://dog.ceo/api/breeds/image/random
// .then - Promises
// asynchronous programming

const dogImageDiv = document.getElementById('dogImage')
const dogButton = document.getElementById('dogButton')

const getNewDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        dogImageDiv.innerHTML = `<img src='${json.message}' height=300 width=300>`
    })
}
dogButton.onclick = () => getNewDog()