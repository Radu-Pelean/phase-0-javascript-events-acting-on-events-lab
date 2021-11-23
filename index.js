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