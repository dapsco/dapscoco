// const phrases = document.querySelectorAll(".phrase")
// const buttons = document.querySelectorAll(".btn button")



// buttons.forEach((button,idx) =>{
//     button.addEventListener("click", ()=>{
//         removeactive()
//         removeshow()
//         button.classList.add("show")
//         phrases[idx +1].classList.add("active")
//     })
// })




// function removeshow(){
//     buttons.forEach(button =>{
//         button.classList.remove("show")
//     })
// }
// function removeactive(){
//     phrases.forEach(phrase =>{
//         phrase.classList.remove("active")
//     })
// }

const listOne = document.getElementById("be")
const listTwo = document.getElementById("two")
const list = document.querySelectorAll("ul li")



listOne.addEventListener("click", function(){
listTwo.classList.remove("first")
    listOne.classList.add("first")
})

listTwo.addEventListener("click", function(){
    listOne.classList.remove("first")
    listTwo.classList.add("first")
  
})