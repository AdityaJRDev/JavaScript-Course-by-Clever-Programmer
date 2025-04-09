console.log('hello')

let titleDiv = document.getElementById('title')

console.log('before: ', titleDiv.innerText)

let message = 'Goodbye my friend!'

titleDiv.innerText = message;

console.log('after: ', titleDiv.innerText)

titleDiv.innerHTML= `<p>${message}</p>`

titleDiv.style.backgroundColor = 'red'

