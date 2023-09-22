// Red
let red  = new Audio();
let src1  = document.createElement("source");
src1.type = "audio/mpeg";
src1.src  = "sounds/red.mp3";
red.appendChild(src1);

function runRed()
{
    red.play();
    $("#red").addClass("pressed");
    setTimeout(() => {
        $("#red").removeClass("pressed");
    }, 100);
}

$("#red").click(() => {
    runRed();
});

//Green

let green  = new Audio();
let src2  = document.createElement("source");
src2.type = "audio/mpeg";
src2.src  = "sounds/green.mp3";
green.appendChild(src2);

function runGreen()
{
    green.play();
    $("#green").addClass("pressed");
    setTimeout(() => {
        $("#green").removeClass("pressed");
    }, 100);
}

$("#green").click(() => {
    runGreen();
});

//Yellow

let yellow  = new Audio();
let src3  = document.createElement("source");
src3.type = "audio/mpeg";
src3.src  = "sounds/yellow.mp3";
yellow.appendChild(src3);

function runYellow()
{
    yellow.play();
    $("#yellow").addClass("pressed");
    setTimeout(() => {
        $("#yellow").removeClass("pressed");
    }, 100);
}

$("#yellow").click(() => {
    runYellow();
});

//blue

let blue  = new Audio();
let src4  = document.createElement("source");
src4.type = "audio/mpeg";
src4.src  = "sounds/blue.mp3";
blue.appendChild(src4);

function runBlue()
{
    blue.play();
    $("#blue").addClass("pressed");
    setTimeout(() => {
        $("#blue").removeClass("pressed");
    }, 100);
}

$("#blue").click(() => {
    runBlue();
});

// Wrong

let wrong  = new Audio();
let src5  = document.createElement("source");
src5.type = "audio/mpeg";
src5.src  = "sounds/wrong.mp3";
wrong.appendChild(src5);

function runWrong()
{
    $("#level-title").text("Game Over, Press Any Key to Restart");
    wrong.play();
    $("body").addClass("game-over");
    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 100);
}