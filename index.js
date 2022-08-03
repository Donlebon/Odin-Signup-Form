let pw = document.querySelector(".password")
let cpw = document.querySelector(".pw-confirm")
let create = document.querySelector(".create")

let pwContainer = document.querySelector(".pw-container")

create.addEventListener("click", function(){
    if(pw.value !== cpw.value){
       addError()
       pw.style.outlineColor = "red"
       cpw.style.outlineColor = "red"
    }
    else{
        alert("Welcome to the crew!")
    }
})

function addError(){
    let error = document.createElement("h1")
    error.textContent = "* Passwords do not match"
    error.classList.add("pw-error")
    pwContainer.appendChild(error)
}

