const randomFruit = (fruits) => {
    const randomNumber =  Math.floor(Math.random() * fruits.length)
    return fruits[randomNumber]
}

let fruits = ['banana', 'apple', 'orange', 'mango']
console.log(randomFruit(fruits));