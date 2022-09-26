function RollSixSidedDice1() {
    document.getElementById("dice1").value = Math.floor(Math.random()*6) + 1;
}

function RollSixSidedDice2() {
    document.getElementById("dice2").value = Math.floor(Math.random()*6) + 1;
}

// used roll dice function from Eric Pogue

window.addEventListener("load", myInit, true);
function myInit() {RollSixSidedDice1(), RollSixSidedDice2()}

//window.addEventListener("load", myInit, true);
// function myInit()