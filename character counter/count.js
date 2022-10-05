var counter=document.querySelector('.count');
var ul=document.querySelector('.limit')
var text=document.querySelector('.textarea')

text.addEventListener('keyup',()=>{
counter.textContent=text.value.length
ul.textContent=1000-text.value.length
});