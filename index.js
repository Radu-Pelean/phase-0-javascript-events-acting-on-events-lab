// Your code here
const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "orange";

dodger.style.bottom = "0px";

dodger.style.left = '180px';

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
     

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

if (left > 0) {
    dodger.style.left =`${left - 1}px`
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});

function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);

if (right < 360) {
    dodger.style.left =`${right + 1}px`
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
        moveDodgerUp();
    }
});

function moveDodgerUp () {
    const upNumbers = dodger.style.bottom.replace("px", "");
    const up = parseInt(upNumbers, 10);

if (up < 380) {
    dodger.style.bottom=`${up + 1}px`
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowDown") {
        moveDodgerDown();
    }
});

function moveDodgerDown () {
    const downNumbers = dodger.style.bottom.replace("px", "");
    const down = parseInt(downNumbers, 10);

if (down > 0) {
    dodger.style.bottom=`${down - 1}px`
    }
}