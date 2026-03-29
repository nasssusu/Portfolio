// typing animation

const words = [
"Web Developer",
"Frontend Developer",
"JavaScript Enthusiast"
]

let i = 0
let j = 0
let currentWord = ""
let isDeleting = false


function type(){

currentWord = words[i]

if(isDeleting){

document.getElementById("typing").textContent =
currentWord.substring(0,j--)

if(j < 0){

isDeleting = false
i++

if(i >= words.length){
i = 0
}

}

}

else{

document.getElementById("typing").textContent =
currentWord.substring(0,j++)

if(j > currentWord.length){

isDeleting = true

setTimeout(type,1000)

return

}

}

setTimeout(type,100)

}

type()



// reveal on scroll animation

function reveal(){

const reveals =
document.querySelectorAll(".reveal")

for(let i=0;i<reveals.length;i++){

const windowHeight = window.innerHeight

const elementTop =
reveals[i].getBoundingClientRect().top

const elementVisible = 100

if(elementTop <
windowHeight - elementVisible){

reveals[i].classList.add("active")

}

}

}


window.addEventListener("scroll", reveal)
reveal()
