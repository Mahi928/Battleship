elements = document.getElementsByClassName("cell");

// arr = 10X10; -> 0, ships -> 1

// 0 -> empty
// 1 -> ship
// 2 -> hit 
// 3-> miss
// 4 -> sunk

for(let i=elements.length/2; i<elements.length; ++i){
    elements[i].addEventListener("click", function(){
        elements[i].innerHTML = "𖦏";
    })
}