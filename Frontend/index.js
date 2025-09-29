selfarr = JSON.parse(localStorage.getItem("selfarr"));
valarr = JSON.parse(localStorage.getItem("valarr"));
selfele = document.querySelectorAll(".player .cell");
oppele = document.querySelectorAll(".opponent .cell")
opparr = [];
localStorage.clear();

for(let i = 0; i<selfele.length; ++i){
    if(valarr[i].backgroundColor!='')
    selfele[i].style.backgroundColor = valarr[i].backgroundColor;
    selfele[i].innerHTML = valarr[i].innerHTML;
}

for(let i = 0; i<100; ++i){
    opparr[i] = 0;
}
let shipsize = [5, 4, 3, 3, 2];
for(let i = 0; i<5; i++){
    let size = shipsize[i], orr = Math.floor(Math.random()*2), temparr = [];
    for(let ii = 0; ii<100; ii++)temparr[ii] = ii;
    let ind = Math.floor(Math.random()*temparr.length);
    while(!validCheck(temparr[ind], orr, size)){
        let temp = temparr[ind];
        temparr = temparr.filter(ele => ele!=temp);
        ind = Math.floor(Math.random()*temparr.length);
    }
}
console.log(opparr);

function validCheck(ind, orr, size){
    let row = Math.floor(ind/10), col = ind%10;
    if(orr == 0){
        for(let i = 0; i<size; ++i){
            if(opparr[ind+i]==1)return false;
        }
        if (col+size>10)return false;
        else{
            for(let i = 0; i<size; ++i){
                opparr[ind+i] = 1;
                // oppele[ind+i].style.backgroundColor = "violet";
            }
            return true;
        }
    }
    else{
        for(let i = 0; i<size; ++i){
            if(opparr[ind+i*10] == 1)return false;
        }
        if (row+size>10)return false;
        else{
            for(let i = 0; i<size; ++i){
                opparr[ind+i*10] = 1;
                // oppele[ind+i*10].style.backgroundColor = "violet";
            }
            return true;
        }
    }
}