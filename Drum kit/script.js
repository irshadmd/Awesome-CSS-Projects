
function removeTransition(e) {
    if (e.propertyName !== "transform")
        return;
    this.classList.remove("playing");
    // console.log(e.propertyName);
}
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio)
        return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);

