let celsius=document.getElementById("celsius");
let fahrenheit=document.getElementById("fahrenheit");
// console.log(celsius,fahrenheit);
function celsiusToFahrenheit(){
    let result =(parseFloat(celsius.value)* 9/5.0)+32;
    fahrenheit.value=parseFloat(result.toFixed(3));
    // console.log(result);
}
function fahrenheitToCelsius(){
    let result =(parseFloat(fahrenheit.value) - 32)* 5/9.0;
    celsius.value=parseFloat(result.toFixed(3));
    console.log(result);
}