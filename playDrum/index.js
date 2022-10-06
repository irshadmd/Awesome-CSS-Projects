// function clicked(){
//     alert("spanked");
// }

function playSound(name){
    var audio = new Audio(name);
    audio.play();
}

function drumPat(keyName){
    switch(keyName){
        case("w"):playSound("sounds/tom-1.mp3");break;
        case("a"):playSound("sounds/tom-1.mp3");break;
        case("s"):playSound("sounds/tom-3.mp3");break;
        case("d"):playSound("sounds/tom-4.mp3");break;
        case("j"):playSound("sounds/crash.mp3");break;
        case("k"):playSound("sounds/kick-bass.mp3");break;
        case("l"):playSound("sounds/snare.mp3");break;
        default:alert("wrong key pressed");
    }
    addAnimation(keyName);
}

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var buttonInnerHtml=this.innerHTML;
        drumPat(buttonInnerHtml);
    });   
}  

function addAnimation(keyName){
    var button=document.querySelector("." + keyName);
    button.classList.add("pressed");
    setTimeout(function(){
        button.classList.remove("pressed");
    },100);
}

function keylistner(){
    document.addEventListener("keypress",function(e){
        var a=e.key;
        drumPat(a);
    })
}
keylistner()