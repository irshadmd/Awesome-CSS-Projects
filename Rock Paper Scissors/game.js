
const choices = [
    "ROCK",
    "PAPER",
    "SCISSORS",
];

const winCondition = {
    "ROCK": "SCISSORS",
    "SCISSORS": "PAPER",
    "PAPER": "ROCK",
};

document.addEventListener('click', function(event){
    if (winCondition.hasOwnProperty(event.target.innerHTML)) {
        const yours = event.target.innerHTML;
        document.getElementById('yours').innerHTML = yours;
        
        const theirs = choices[Math.round((choices.length-1) * Math.random())];
        document.getElementById('theirs').innerHTML = theirs;

        let outcome = "Draw";
        let win = false, lose = false, draw = false;
        if (winCondition[yours] == theirs) {
            outcome = "Win";
            win = true;
        } else if (winCondition[theirs] == yours) {
            outcome = "Lose";
            lose = true;
        } else {
            draw = true;
        }

        document.getElementById('outcome').innerHTML = outcome;
        document.getElementById('outcome').classList.toggle('win', win);
        document.getElementById('outcome').classList.toggle('lose', lose);
        document.getElementById('outcome').classList.toggle('draw', draw);
    }
}, false);
