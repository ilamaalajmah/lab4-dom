let stop= document.getElementById("stopButton")
stop.addEventListener("click", ()=>{
  red.style.backgroundColor="red"
  orange.style.backgroundColor="#111"
  green.style.backgroundColor="#111"
})

let slow= document.getElementById("slowButton")
slow.addEventListener("click", ()=>{
    yellow.style.backgroundColor="#fcad1e"
    red.style.backgroundColor="#111"
    green.style.backgroundColor="#111"
})
let go= document.getElementById("goButton")
go.addEventListener("click", ()=>{
    green.style.backgroundColor="green"
    red.style.backgroundColor="#111"
    yellow.style.backgroundColor="#111"
})

let red = document.getElementById("stopLight")
let yellow = document.getElementById("slowLight")
let green = document.getElementById("goLight")

