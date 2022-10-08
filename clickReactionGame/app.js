
let inPlay = false;
let playArea = {};
let count = 0;
const message = document.querySelector('.message');
const button = document.querySelector('button');
const gameArea = document.querySelector('.gameArea');
const results = document.querySelector('.results');
const directions = document.querySelector('.directions');

function showMessage(notification){
    message.innerHTML = `<h3>${notification}</h3>`;
}

function showShape(){
    playArea.timer = setTimeout(myShape, random(4000));
}

function myShape(){

    let element = document.createElement('div');
    element.classList.add('shape');
    element.style.top = random(setTopMargin()) + 'px';
    element.style.left = random(setLeftMargin()) + 'px';
    element.style.backgroundColor = getColor();
    element.start = new Date().getTime();
    element.addEventListener('click', hit);
    gameArea.appendChild(element);
}

// Pick a random hex color
function getColor(){
    function col(){
        let hex = random(255).toString(16);
        //always return 2 values, even if a 0 is apended
        return ('0' + String(hex)).substr(-2);
    }
    return '#' + col() + col() + col();
}

function setTopMargin(){
    let maxHeight = gameArea.clientHeight;
    if (maxHeight <= 100){
        maxHeight = maxHeight + 200;
    } else {
        maxHeight = maxHeight - 200;
    }
    return maxHeight;
}

function setLeftMargin(){
    let maxWidth = gameArea.clientWidth;
    if (maxWidth <= 100){
        maxWidth = maxWidth + 200;
    } else {
        maxWidth = maxWidth - 200;
    }
    
    return maxWidth;
}

function hit(e){
    let start = e.target.start;
    let end = new Date().getTime();
    let duration = (end-start)/1000;
    let maxDuration = 1;
    
    clearTimeout(playArea.timer);
    showMessage('It took you ' + duration + ' seconds to click');
    if (duration > maxDuration){
        gameArea.children[0].remove();
        results.innerHTML = `Too Slow! <span id="loser">You Lose!</span> Your score was ${count}.`;
        resetGame();
    } else {
        gameArea.children[0].remove();
        playArea.timer = setTimeout(myShape, random(4000));
        count++;
        if (count === 10){
            results.innerHTML = `You reached ${renderCount(count)}! <span id="winner">You win!</span>`;
            resetGame();
        } else {
            results.innerHTML = `Score: ${renderCount(count)} of 10`;
        }
    }
}

function renderCount(count){
    return count;
}

function random(number){
    let tempVal = Math.floor(Math.random()*number);
    return tempVal;
}

function resetGame(){
    clearTimeout(playArea.timer);
    inPlay = false;
    button.style.display = 'inline-block';
    button.innerHTML = 'Start Again';
    button.style.width = 'auto';
    button.style.height = 'auto';
    
}

showMessage('Click Start to Begin!');

button.addEventListener('click', function(){
    //start game play
        inPlay = true;

        button.style.display = 'none';
        //directions.style.display = 'none';
        results.innerHTML = '';
        count = 0;

    showMessage('Starting...');

    showShape();
})