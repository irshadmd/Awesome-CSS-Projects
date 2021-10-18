function changeColor(color) {
    // document.getElementById('watch').style.background = color;
    
    let strapArr = document.getElementsByClassName('watch');
    for(let i=0; i<strapArr.length; i++) {
        strapArr[i].style.background = color;
    }
} 

var today = new Date();
var curTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.getElementById('time').innerHTML=curTime;

setInterval(function(){ 
    var today = new Date();
    var curTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById('time').innerHTML=curTime;
}, 1000);