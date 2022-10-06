let button= new Audio();
button.src="popup.mp3";
showCounters();
let reset=document.getElementById('reset');
let increment=document.getElementById('increment');
let decrement=document.getElementById('decrement');
let num=0;
let value;
increment.addEventListener('click',()=>{
    num++;
    let screen=document.getElementById('input');
    screen.innerHTML=num;
    value=num;
})
decrement.addEventListener('click',()=>{
    num--;
    let screen=document.getElementById('input');
    screen.innerHTML=num; 
    value=num;
})
reset.addEventListener('click',()=>{
    num=0;
    let screen=document.getElementById('input');
    screen.innerHTML=num;
    value=num;
})
//Saveing
showCounters();
let save=document.getElementById('save');
save.addEventListener('click',()=>{
    let addname=document.getElementById('name');
    let addcount=document.getElementById('input');
    addcount=parseInt(addcount.innerHTML);
    let name=localStorage.getItem('name');
    let count=localStorage.getItem('count');
    if(name == null || count == null)
    {
        nameObj=[];
        countObj=[];
    }
    else
    {
        nameObj=JSON.parse(name);
        countObj=JSON.parse(count);
    }
    nameObj.push(addname.value);
    countObj.push(addcount);
    localStorage.setItem('name',JSON.stringify(nameObj));
    localStorage.setItem('count',JSON.stringify(countObj));
    addname.value="";
    num=0;
    let screen=document.getElementById('input');
    screen.innerHTML=num;
    showCounters();
    
})
function showCounters(){
    let name=localStorage.getItem('name');
    let count=localStorage.getItem('count');
    if(name == null || count == null)
    {
        nameObj=[];
        countObj=[];
    }
    else
    {
        nameObj=JSON.parse(name);
        countObj=JSON.parse(count);
    }
    let html="";
    nameObj.forEach(function(element,index){
        let countIndex=countObj[index];
        html+=`
        <table class="names">
        <tr>
        <td>${index+1}</td>
        <td>${element}</td>
        <td>${countIndex}</td>
        <td><button id=${index} onclick="Continue(this.id)">Continue</button></td>
        </tr>
    </table>`
    let showCount=document.getElementById('showCount');
    if(nameObj.length!=0 || countObj.length!=0)
    {
        showCount.innerHTML=html;
    }
    else
    {
        showCount.innerHTML=`Please save atleast one count.`;
    }
    })
}
//continue
function Continue(index){
    num=parseInt(countObj[index]);
    let screen=document.getElementById('input');
    screen.innerHTML=num;
    let name=localStorage.getItem('name');
    let count=localStorage.getItem('count');
    if(name == null || count == null)
    {
        nameObj=[];
        countObj=[];
    }
    else
    {
        nameObj=JSON.parse(name);
        countObj=JSON.parse(count);
    }  
    console.log(index);
    nameObj.splice(index,1);
    countObj.splice(index,1);
    localStorage.setItem('name',JSON.stringify(nameObj));
    localStorage.setItem('count',JSON.stringify(countObj));
    showCounters();
}
//Search Engine
let search=document.getElementById('search');
search.addEventListener('input',()=>{
    let inpval=search.value.toLowerCase();
    let names=document.getElementsByClassName('names');
    for( let i=0;i<names.length;i++)
    {
        if(! names[i].innerHTML.toLocaleLowerCase().includes(inpval))
        {
            names[i].style.display="none";
        }
        else{
            names[i].style.display="block";
        }
    }

})
