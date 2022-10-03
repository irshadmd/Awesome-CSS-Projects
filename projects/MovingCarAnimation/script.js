$(document).ready(function(){
    $surface = $('.surface');
    $car = $('.car');

    // keypress events
    $(document).on('keypress', function(e){
        // keycode of enter is 13 (console.log(e.which))
        // console.log(e.which)
        if(e.which == 13){
            console.log(e.which)
            $($surface).toggleClass('moveRight');
            $($car).toggleClass('suspension');
        }
    })
})