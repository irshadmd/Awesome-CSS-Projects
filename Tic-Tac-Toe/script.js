document.getElementById("display").innerHTML="player O turn";
        
var num=1;
function check(par){
   
    for(var i=num;i<=9;i++){
    if(i%2==0){
        document.getElementById("display").innerHTML="player O turn";
   document.getElementById(par).value="x";
    }
    else{
        document.getElementById("display").innerHTML="player X turn";
        document.getElementById(par).value="o";
    }
  break;
}
num++;

var r1,r2,r3,r4,r5,r6,r7,r8,r9;
r1=document.getElementById("val1").value;
r2=document.getElementById("val2").value;
r3=document.getElementById("val3").value;
r4=document.getElementById("val4").value;
r5=document.getElementById("val5").value;
r6=document.getElementById("val6").value;
r7=document.getElementById("val7").value;
r8=document.getElementById("val8").value;
r9=document.getElementById("val9").value;

if((r1=='o' && r2=='o' && r3=='o')||(r1=='o' && r4=='o' && r7=='o')||(r1=='o' && r5=='o' && r9=='o')||(r2=='o' && r5=='o' && r8=='o')||(r3=='o' && r6=='o' && r9=='o')||(r4=='o' && r5=='o' && r6=='o')||(r7=='o' && r8=='o' && r9=='o')||(r3=='o' && r5=='o' && r7=='o'))
{

document.getElementById("display").innerHTML="player O wins !";

}
else if(num==10) {
document.getElementById("display").innerHTML="tie !!";
}
else if((r1=='x' && r2=='x' && r3=='x')||(r1=='x' && r4=='x' && r7=='x')||(r1=='x' && r5=='x' && r9=='x')||(r2=='x' && r5=='x' && r8=='x')||(r3=='x' && r6=='x' && r9=='x')||(r4=='x' && r5=='x' && r6=='x')||(r7=='x' && r8=='x' && r9=='x')||(r3=='x' && r5=='x' && r7=='x'))
{
//document.write("user x win !! ");
document.getElementById("display").innerHTML="player X wins !";
}


/*else{
document.write("tie !!")
}
/* else if(r1=='x' && r4=='x' && r7=='x')
{
document.write("you win !! ");
}*/
}
function erase()
{
num=1;
document.getElementById("display").innerHTML="player O turn";

document.getElementById("val1").value=" ";
document.getElementById("val2").value=" ";
document.getElementById("val3").value=" ";
document.getElementById("val4").value=" ";
document.getElementById("val5").value=" ";
document.getElementById("val6").value=" ";
document.getElementById("val7").value=" ";
document.getElementById("val8").value=" ";
document.getElementById("val9").value=" "; 
}