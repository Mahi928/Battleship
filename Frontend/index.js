elements = document.getElementsByClassName("cell");

for(let i=0; i<elements.length; ++i){
    elements[i].addEventListener("click", function(){
        elements[i].innerHTML = "𖦏";
    })
}