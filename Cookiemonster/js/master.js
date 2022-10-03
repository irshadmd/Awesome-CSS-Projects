/* DOM elements that are needed */
const eyes = Array.from(
    document.getElementsByClassName("cookiemonster__innerEye")
);
const cookies = Array.from(document.getElementsByClassName("cookie"));
const mouth = document.getElementById("js--mouth");
const snackTime = document.getElementById("js--snackTime");
const music = document.getElementById("js--music");
/* var needed for setting a toggle on the animation */
const animationTime = 1200;
/* Width and height needed for calculations */
const width = window.innerWidth;
const height = window.innerHeight;
/* vars needed for checking if a cookie is dragged and the cookie that is dragged (target) */
let cookieIsDragged = false;
let target;

/**
 * function (closure) that returns a function
 * for checking of the first music is played
 * @returns function
 */
function onSnackTime() {
    let isPlayed = false;
    return function playSnackTime() {
        if (isPlayed === false) {
            snackTime.play();
            isPlayed = true;
        }
    };
}

/**
 * onmouseenter function. Function checks if a cookie is placed in the mouth.
 * The function does this by checking if the mouse class is entered from the cookie.
 * This is checked by the relatedTarget property from the event. There is also a check if there is not a cookie dragged at the moment.
 * If all this is "ok" an animation-class a-eat is added so that the mouth is animated.
 * Also a "shrink" transition is added via a class to the cookie (the related target).
 * An audio-element from the HTML is played during this animation.
 * After the var animationTime has ended the a-eat animation class is removed.
 * @param {*} event - default JS event property that is needed to read me data from
 * @returns void
 */
mouth.onmouseover = function (event) {
    if (
        event.releatedTarget !== null &&
        event.relatedTarget.classList.contains("cookie") &&
        cookieIsDragged === false
    ) {
        mouth.classList.toggle("a-eat");
        event.relatedTarget.classList.add("cookie--eaten--1");
        music.play();
        setTimeout(function () {
            mouth.classList.toggle("a-eat");
        }, animationTime);
    }
};

/**
 * call to closure needed for checking if music is already played.
 * Needs to be the same closure, otherwise each cookie has his own closure!
 */
let checkSnackTime = onSnackTime();

/**
 * forEach function that is called on all elements with class cookie
 * Every cookie from the Array (cast to an Array) gets a onClick function
 * Reference to the closure is given to each Cookie
 * cookieIsDragged is set to false/true depending on the previous value. Needed for passin a check in window.onmousemove
 * There was a bug that when a spot on the cookie is clicked the cookie would not get updated, but the spot would be.
 * To fix this there is a if-statement that checks if a spot is clicked, if that is the case the parent (the cookie) will be set as the target.
 * The cookie will be assigned to the target. The target will get updated when the mouse if moved.
 */
cookies.forEach(function (cookie) {
    cookie.onclick = function (event) {
        checkSnackTime();
        cookieIsDragged = !cookieIsDragged;
        if (event.target.classList.contains("cookie__spot")) {
            target = event.target.parentNode;
            return;
        }
        target = event.target;
    };
});

/**
 * Function that updates the position of the inner eyes.
 * If a cookie is dragged the eyes will be updated on basis of the width and height of the window.
 * To prevent the inner eyes (pupils) to "walk" out of the eyes a couple of if statement are implemented.
 * After all checks the eyes are updated on each mousemove.
 * @param {*} event
 * @returns void
 */
window.onmousemove = function (event) {
    if (cookieIsDragged === false) return;

    target.style.top = event.clientY + "px";
    target.style.left = event.clientX + "px";

    let left = (event.clientX / width) * 90;
    let top = (event.clientY / height) * 90;

    if (left < 0) return;
    if (left > 90) return;
    if (top < 5) return;
    if (top > 100) return;

    eyes.forEach((eye) => {
        eye.style.left = left + "%";
        eye.style.top = top + "%";
    });
};
