var timeField = document.getElementById('tb');
var dateField = document.getElementById('d');
var currentDate = new Date();
var secs = currentDate.getSeconds();
var minutes = currentDate.getMinutes();
var hours = currentDate.getHours();
var date = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();
var setTime_ = true;
var setTime2_ = false;



var months = [
              'Jan' , 'Feb' , 'Mar', 'Apr',
              'May' , 'Jun' , 'Jul' , 'Aug',
              'Sep' , 'Oct' , 'Nov' , 'Dec'
             ];

function cRunTime(){

          timeField.innerHTML = `${hours} : ${minutes} : ${secs}`;

          secs = +secs , minutes = +minutes , hours = +hours ;
          
          secs = secs <= 58 ? secs + 1 : 0;
          if (secs == 0) { 

                minutes = minutes <= 58 ? minutes + 1 : 0;
            }

            if (minutes == 0 && secs == 0){

              hours = hours <= 22 ? hours + 1 : 0;
            }

            [hours , minutes , secs] = ['' + hours , '' + minutes , '' + secs].map(

            fld => fld.length == 1 ? '0' + fld : fld );

        }             

function runTime() {

        dateField.innerHTML =  date + ' ' + months[month] + ' ' + year;

        if (setTime_) { cRunTime(); }}   

function runTime2() {

        dateField.innerHTML =  date + ' ' + months[month] + ' ' + year;

        if (setTime2_) { cRunTime(); }}           

function cStartStop(){

  timeField.innerHTML = '00 : 00 : 00';
  setTime_ = false;
  setTime2_ = false;

  var start = document.createElement('input');
  start.setAttribute('class', 'st');
  start.setAttribute('value', 'Start');
  hours = '00' , minutes = '00' , secs = '00';
  start.onclick = function (){ 
              setTime2_ = true;
              setInterval(runTime2 , 1000);}

  var stop = document.createElement('input');
  stop.onclick = function(){ 
    setTime2_ = false;
    setTime_ = false; }
  stop.setAttribute('class', 'sp');
  stop.setAttribute('value', 'Stop');
 

  [start , stop].forEach(z => z.setAttribute('type' , 'button'));
  [start , stop].forEach(z => document.body.appendChild(z));

}             

function createAdjustBut(){

  setTime_ = false;
  setTime2_ = false;

  var but = document.createElement('input');
  but.setAttribute('class', 'p1');
  but.setAttribute('value', '+');
  

  var but1 = document.createElement('input');
  but1.setAttribute('class', 'p2');
  but1.setAttribute('value', '+');
  

  var but2 = document.createElement('input');
  but2.setAttribute('class', 'p3');
  but2.setAttribute('value', '+');
  

  var but3 = document.createElement('input');
  but3.setAttribute('class', 'p4');
  but3.setAttribute('value', '-');
  

  var but4 = document.createElement('input');
  but4.setAttribute('class', 'p5');
  but4.setAttribute('value', '-');
  

  var but5 = document.createElement('input');
  but5.setAttribute('class', 'p6');
  but5.setAttribute('value', '-');
  
  var buts_array = [but , but1 , but2 , but3 , but4 , but5]
  buts_array.forEach(y => y.setAttribute('type', 'button'));
  buts_array.forEach(x => document.body.appendChild(x));
  
  but.onclick = function(){

            hours = +hours;
            hours += hours <= 22? 1 : -hours;
            formatAndPlace();}

  but3.onclick = function(){

            hours = +hours;
            hours -= hours >= 1 ? 1 : -23;
            formatAndPlace();}  

  but1.onclick = function(){

            minutes = +minutes;
            minutes += minutes <= 58? 1 : -minutes;
            formatAndPlace();} 

  but4.onclick = function(){

            minutes = +minutes;
            minutes -= minutes >= 1 ? 1 : -59;
            formatAndPlace();} 

  but2.onclick = function(){

            secs = +secs;
            secs += minutes <= 58? 1 : -secs;
            formatAndPlace();}  

  but5.onclick = function(){

            secs = +secs;
            secs -= secs >= 1 ? 1 : -59;
            formatAndPlace();} 


  var but_d = document.createElement('input');
  but_d.setAttribute('type', 'button' );
  but_d.setAttribute('class', 'done_button');
  but_d.setAttribute('value', 'Done');
  document.body.appendChild(but_d); 

  but_d.onclick = function(){ 
    setTime_ = true;
    [but , but1 , but2 , but3 , but4 , but5 , but_d].forEach(b => b.remove());}     
                              
}  



function formatAndPlace(){

  [hours , minutes , secs] = ['' + hours , '' + minutes , '' + secs].map(

  fld => fld.length == 1 ? '0' + fld : fld );

  timeField.innerHTML = `${hours} : ${minutes} : ${secs}`;}



setInterval(runTime, 1000);
