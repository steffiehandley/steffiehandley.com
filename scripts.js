var popup = document.querySelector(".popup");
var toggle = document.querySelector(".toggle")
        
function togpop() {
    popup.style.display = "block"
}

toggle.addEventListener("click",togpop)