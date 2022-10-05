let activep1=document.querySelector(".sec1");
console.log(activep1);
let activep2=document.querySelector(".sec2");
console.log(activep2);
let newgame=document.querySelector(".name");
console.log(newgame);
let rolldice=document.querySelector(".roll");
console.log(rolldice);
let hold=document.querySelector(".ho");
console.log(hold);
let highscore1=document.querySelector(".num1");
console.log(highscore1);
let highscore2=document.querySelector(".num2");
console.log(highscore2);
let currentscore1=document.querySelector(".box2");
console.log(currentscore1);
let currentscore2=document.querySelector(".box3");
console.log(currentscore2);
let dicepic=document.querySelector(".image");
console.log(dicepic);
let score1=0;
let score2=0;
let activeplayer=0;
let scores=new Array(score1, score2);
let highscores =new Array(highscore1, highscore2);
let currentscores=new Array(currentscore1, currentscore2);


rolldice.addEventListener("click", function(){
    let rolledno= Math.trunc(Math.random()*6)+1;
    console.log(rolledno);


if(activeplayer===0){
  if(rolledno!==1){
   score1=score1+rolledno;
    currentscore1.textContent= score1;
//    scores[0]=score1;
   console.log(scores);
   dicepic.src = `dice-${rolledno}.png`;

 hold.addEventListener("click", function(){
     document.querySelector(".image").style.dispaly="block";
    highscore1.textContent=score1;
    document.querySelector("#p1").style.backgroundColor="#b16c88";
    document.querySelector("#p2").style.backgroundColor="#cc9faf"; 
    activeplayer=1;

 });
 if(score1>=50){
    document.querySelector(".image").style.dispaly="none";
    document.querySelector(".player1").textContent="winner👍";
    document.querySelector(".player2").textContent="Loser👎";
    highscore1.textContent=score1;
    currentscore1.textcontent=0;
    score1=0;

 }
  }else{
    document.querySelector("#p1").style.backgroundColor="#b16c88";
    document.querySelector("#p2").style.backgroundColor="#cc9faf";
      score1=0;
     highscore1.textContent=0;
    currentscore1.textContent=0;
    activeplayer=1;
    
  }

}
else{
    if(rolledno!==1){
        score2=score2+rolledno;
         currentscore2.textContent=score2;
     //    scores[0]=score1;
        // console.log(scores);
        dicepic.src = `dice-${rolledno}.png`;
     
      hold.addEventListener("click", function(){
          document.querySelector(".image").style.dispaly="block";
         highscore2.textContent=score2;
         document.querySelector("#p2").style.backgroundColor="#b16c88";
         document.querySelector("#p1").style.backgroundColor="#cc9faf"; 
         activeplayer=0;
     
      });
      if(score2>=50){
         document.querySelector(".image").style.dispaly="none";
         document.querySelector(".player2").textContent="winner👍";
         document.querySelector(".player1").textContent="Loser👎";
         highscore2.textContent=score2;
         currentscore2.textcontent=0;
        
     
      }
       }else{
         document.querySelector("#p2").style.backgroundColor="#b16c88";
         document.querySelector("#p1").style.backgroundColor="#cc9faf";
          score2=0;
          highscore2.textContent=0;
         currentscore2.textContent=0;
         activeplayer=0;
         
       }

}

});

newgame.addEventListener("click" ,function(){
    score1=0;
    score2=0;
    activeplayer=0;
    currentscore1.textContent=0; 
    currentscore2.textContent=0;
    highscore1.textContent=0;
    highscore2.textContent=0;
    dicepic.src=`dice-1.png`;
    document.querySelector(".player2").textContent="player2";
    document.querySelector(".player1").textContent="player1";
    document.querySelector("#p2").style.backgroundColor="#b16c88";
    document.querySelector("#p1").style.backgroundColor="#cc9faf"; 
})


