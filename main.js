let bgcolor = document.querySelector("body");
let mainPhoto = document.querySelector(".mainImg");
let bars = document.querySelector(".bars");
let nav = document.querySelector(".nav");

function photo(phone){
    mainPhoto.src = phone;
}
function colors(color){
    bgcolor.style.backgroundColor = color;
}


bars.onclick = function(){
        if(nav.style.display == "flex"){
            nav.style.display = "none"
        }else{
            nav.style.display = "flex"
        }
    
}