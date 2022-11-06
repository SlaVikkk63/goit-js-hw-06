const total = document.querySelectorAll(".item")

console.log(`Number of categories:${total.length}`)

const categories = document.querySelectorAll(".item")

categories.forEach((category) => {


const name = category.querySelector("h2")


const elements = category.querySelectorAll("li")


console.log(`Category:${name.textContent} 
Elements:${elements.length}`)


})