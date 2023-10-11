 
const yesbtn = document.getElementById("yesbtn");
const nobtn = document.getElementById("nobtn");

const togyes=()=> {
    yesbtn.style.background= "#7d6fd7";
    yesbtn.style.color="#40293B";
}

const togno=()=> {
    nobtn.style.background= "#7d6fd7";
    nobtn.style.color="#40293B";
}

yesbtn.addEventListener("click", togyes);
nobtn.addEventListener("click", togno)