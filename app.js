const btn = document.getElementById("btnclick")
const container = document.querySelector("#Container")

let count = 0

btn.addEventListener("click", (e) => {
    addNumber()
})
btn.addEventListener("click", addNumber)
btn.removeEventListener("click", addNumber)
// btn.addEventListener("input", (e) => {
//     addNumber(e.target.value)
// })

function addNumber () {
    count += 1
    container.textContent = count
}
// function addNumber (text) {
//     container.textContent = text
// }


document.addEventListener("keydown", (e) => {
    console.log(e.key)
    if (e.key = "H") {
        console.log("du trykket h")
    }
})
document.addEventListener("DOMContentLoaded", (e) => {
console.log()
})

const formTest = document.querySelector("#form")
const pass = document.querySelector("#pass")
const bruker = document.querySelector("#brukerNavn")

let brukerNavn = "";
let password = "";
pass.addEventListener("input", (e) => {
 password = e.target.value
})
bruker.addEventListener("input", (e) => {
    brukerNavn = e.target.value
})

formTest.addEventListener("submit", (e) => {
    e.preventDefault()
    displayUser()
})

function displayUser() {
    console.log(brukerNavn, " ", password)
}
