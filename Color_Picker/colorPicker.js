let noOfSquares=6;
let picked;
let squares=document.getElementsByClassName("square");
let targetColor=document.getElementById("targetColor");
let message=document.getElementById("message");
let head=document.querySelector("h1");
let reset=document.getElementById("NewColor");
let easy=document.getElementById("easy");
let hard=document.getElementById("hard");
init();
easy.addEventListener("click",function(){
    noOfSquares=3;
    for(var i=3;i<6;i++){
        squares[i].style.backgroundColor="black";
    }
    init();

});
hard.addEventListener("click",function(){
    noOfSquares=6;
    init();
});

function init(){
    
    let arr=generateRandomColor(noOfSquares);
    picked=arr[randomPickedColorIndex()];
    console.log(arr);
    console.log(picked);
    targetColor.textContent=picked;


for(var i=0;i<noOfSquares;i++){
    squares[i].style.backgroundColor=arr[i];
    console.log(squares[i].style.backgroundColor);
    console.log(arr[i]);
    
    squares[i].addEventListener("click",function(e){
        console.log(e);
        if(picked===this.style.backgroundColor)
        {
            message.textContent="Correct!!";
            message.style.color="green";
            changeColor(this.style.backgroundColor);
            reset.textContent="PLAY AGAIN??";
        }
        else{
            message.textContent="TRY AGAIN!";
            message.style.color="red";
            this.style.backgroundColor="black";
        }

    });

}
reset.addEventListener("click",resetln);

function randomPickedColorIndex(){
    return Math.floor(Math.random()*arr.length);
}
function generateRandomColor(limit){
    var color=[];
    for(let i=0;i<limit;i++)
        color.push(rgbGenerator());
        // console.log(color);
        return color;
        
    
}
function rgbGenerator(){
var r=Math.floor(Math.random()*256);
var g=Math.floor(Math.random()*256);
var b=Math.floor(Math.random()*256);
//console.log("rgb(" + r + "," + g + "," + b + ")");
return "rgb(" + r + ", "  + g + ", "  + b + ")";
}
function changeColor(color){
    for(let i=0;i<squares.length;i++)
        squares[i].style.backgroundColor=color;
        head.style.backgroundColor=color;
    
}
function resetln(){
    arr=generateRandomColor(noOfSquares);
    picked=arr[randomPickedColorIndex()];
    reset.textContent="NEW COLORS"
    targetColor.textContent=picked;
    message.textContent="";
    head.style.backgroundColor="yellow";
    for(let i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=arr[i];
    }
}
}