function generateRandomNumber() {
    const upperLimit = parseInt(document.getElementById('upperLimit').value);

    if (isNaN(upperLimit) || upperLimit < 0) {
        alert("Please enter a number that is not a negative");
        return;
    }

    const randomNumber = Math.floor(Math.random() * (upperLimit+1));
    document.getElementById("result").textContent = "Random Number: " + randomNumber; 
    confetti({
        origin: {
            x: 0.5,
            y: 0.5
        },
        angle: Math.random() * 360,
        spread: Math.random() * 100,
        particleCount: Math.random() * 200,
        velocity: Math.random() * 2.5
    });
}