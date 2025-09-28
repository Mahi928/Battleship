elements = document.getElementsByClassName("cell");

for(let i=elements.length/2; i<elements.length; ++i){
    elements[i].addEventListener("click", function(){
        elements[i].innerHTML = "𖦏";
    })
}