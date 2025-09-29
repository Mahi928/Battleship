let ships = [5, 4, 3, 3, 2];
let shipColors = ["violet", "yellow", "green", "aliceblue", "red"];
let timer = 20, index = 0, flg = 0, row = -1, col = -1;
let elements = Array.from(document.getElementsByClassName("cell"));
let tablearr = [];  

for(let i = 0; i<elements.length; ++i){
    tablearr[i] = 0;
}

for(let i = 0; i<elements.length; ++i){
    elements[i].addEventListener("click", ()=>{
        if(timer == 0){
            alert("Time up buddy!!! Refresh to place ships again.");
            return;
        }
        elements.forEach(el => {
            el.classList.remove("active");
        })
        if(tablearr[i]!=1)
        elements[i].classList.add("active");

        row = Math.floor(i/10);
        col = i%10;
    })
}

const countDown = setInterval(()=>{
    --timer;
    document.getElementById("timer").innerHTML = `Timer: ${timer} S`
    if(flg){
        timer = 21;
        index++;
        if(index<5) document.getElementById("shipNo").innerHTML = `Select position for ship of size ${ships[index]}`;
        else {
            clearInterval(countDown);
            localStorage.setItem("selfarr", JSON.stringify(tablearr));
            let temparr = [];
            elements.forEach(ele=>{
                temparr.push({backgroundColor: ele.style.backgroundColor, innerHTML: ele.innerHTML});
            })
            localStorage.setItem("valarr", JSON.stringify(temparr));
            window.location.replace("http://127.0.0.1:5500/Frontend/index.html");
        }
        flg = 0;
        row = -1;
        col = -1;
    }
    if(timer==0){
        alert("Time up buddy!!! Refresh to place ships again.")
        clearInterval(countDown);
    }
}, 1000)

document.getElementById("orientation").addEventListener("submit", function(event){
    event.preventDefault();
    const selected = document.querySelector("input[name='orr']:checked");
    const size = ships[index];
    if(selected.value=="Horizontal"){
        if(row==-1 || col==-1){
            alert("Select starting co-orddinates first");
            return;
        }
        let ind = row*10+col;
        for(let i = 0; i<size; ++i){
            if(tablearr[ind+i]==1){
                alert("The Ship is Overlapping! Select Again.")
                return;
            }
        }
        if (col+size>10){
            alert("Ship is Going out of bounds!");
        }
        else{
            for(let i = 0; i<size; ++i){
                tablearr[ind+i] = 1;
                elements[ind+i].innerHTML = "";
                elements[ind+i].style.backgroundColor = shipColors[index];
            }
            flg = 1;
        }
    }
    else{
        if(row==-1 || col==-1){
            alert("Select starting co-orddinates first");
        }
        let ind = row*10+col;
        for(let i = 0; i<size; ++i){
            if(tablearr[ind+i*10] == 1){
                alert("The Ship is Overlapping! Select Again.");
                return;
            }
        }
        if (row+size>10){
            alert("Ship is Going out of bounds!");
        }
        else {
            for(let i = 0; i<size; ++i){
                tablearr[ind+i*10] = 1;
                elements[ind+i*10].innerHTML = "";
                elements[ind+i*10].style.backgroundColor = shipColors[index];
            }
            flg = 1;
        }
    }
})

localStorage.setItem("selfarr", JSON.stringify(tablearr));
localStorage.setItem("selfele", JSON.stringify(elements));