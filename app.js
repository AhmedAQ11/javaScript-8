
function backGrd(){
    
    var btColor = document.getElementById("btColor")
    var user = prompt ("Enter background color")
    btColor.style.backgroundColor = user ;
    
}

function textCol(){

    var btColor = document.getElementById("btColor")
    var user = prompt ("enter color")

    btColor.style.color = user;    
}

function showImg(){
    var images = document.getElementById("images")
    images.style.display = "block"
    
}

function bigImg(){
    var images = document.getElementById("images")
    images.style.width = "600px"
}

function smallImg(){
    var images = document.getElementById("images")
    images.style.width = "400px"
}


function hideImg(){
    var images = document.getElementById("images")
    images.style.display = "none"
}

function bulbToggler(id,e){
    if(id == 1){
        e.src = "./image/on.gif"
    }else{
        e.src = "./image/off.gif"
    }
}



function paraCol(){
    var chaCol = document.getElementsByTagName("p")
    

    var chaparatext = chaCol[1].style.color = "red"
    var chaparatext = chaCol[2].style.color = "green"
    var chaparatext = chaCol[3].style.color = "yellow"
    var chaparatext = chaCol[4].style.color = "blue" 
}