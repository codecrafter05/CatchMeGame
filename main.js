

// the boxs contani//
const dad = document.querySelector('.mom');

// ganerait the box 
for (let i = 0; i < 36; i++) {
    let div = document.createElement('div');
    div.classList.add(`box`);
    div.setAttribute('id', `m${i}`)
    dad.appendChild(div);
}

//visitor count /
let visitorCount = 0;
visitorCount++;
const visitorCountElement = document.getElementById('visitor-count');
visitorCountElement.textContent = visitorCount;




//function to show monkey//
const container = document.querySelector('.mom');
const boxes = document.querySelectorAll('.box');


//image ixtenshen
const images = [
    'images/monky.png'
];


//location image 
let currentImageIndex = 15;

// stop the start game button///////
// console.log(startGame)




// Set the start Game ////
//  startGame = "start";


// Create Global Variables

let monkeyIntervalId;

// Number of times the monkey has been caught
let monkeyCaughtCount = 0;

// Set the time delay (monkey show time)
let monkeyShowTime = 1000;

// Monkey is in box (default to 0)
let monkeyInBox = 0;

// Set level (starts at 1)
let level = 1;

// Set rounds start at 0
let rounds = 0;


//start score
let score = 0

// score counte 
const scoreElement = document.getElementById('score');
document.getElementById("score").innerHTML = "Score: 0";



// initial time playing
let initialPlay = true;

let hitMonkey = false;

let gameOver = false;
// add one to rounds
function showMonkey(e) {
    console.log("Show Monkehy")
    if(!initialPlay && !hitMonkey){
        console.log('Game Over!!')
        gameOver = true;
        clearInterval(monkeyIntervalId);
        score = 0
        enableStartButton(true);
        console.log('Start Button enabled!!')
    }
    if(initialPlay){
        initialPlay = false;
    }
    if (!gameOver) {
          // TODO Clear all fields
    // Delete all contents of dad
    while (dad.firstChild) {
        dad.removeChild(dad.firstChild)
    }
    // Do the loop again to create the divs 
    for (let i = 0; i < 36; i++) {
        let div = document.createElement('div');
        div.classList.add(`box`);
        div.setAttribute('id', `m${i}`)
        dad.appendChild(div);
    }

    rounds++;


    
    // Start the status change process by setting the in progress variable//////
    // TODO Move this to somewhere else
    // e.target.setAttribute('disabled', true);
    // Loop for the number of levels
    // Create random number from 0-36 (currentImageIndex)
    // for (let i = 0; i < level; i++) {
    currentImageIndex = Math.floor(Math.random() * 36);

    // Create a new image element
    const image = new Image();
    image.src = images[0];
    image.classList.add('images');
    image.setAttribute('id', `i${currentImageIndex}`);


    // Add the image to the box with the ID String from above
    const box = document.querySelector(`#m${currentImageIndex}`);
    box.appendChild(image);


    //centering the image from css 
    box.classList.add('centering')


    //remove the box styling
    box.classList.remove('box');


    // Show the image
    image.classList.add('active');


    // add a click event to the monkey when it is caught
    image.addEventListener('click', catchMonkey);

    monkeyInBox++;
    hitMonkey = false;
    console.log(`showMonkey monkeyInBox ${monkeyInBox}`);

    // Add 1 the monkey is in box variable
    // setTimeout(checkForMonkey, monkeyShowTime);
    // checkForMonkey();
    }
  
}



// Set a timer for checking for the monky number of seconds defined by monkey time (call checkForMonkey)
function catchMonkey(event) {
    // Add 1 to monkey catch count
    monkeyCaughtCount++;
    monkeyInBox--;
    console.log(`catchMonkey monkeyInBox ${monkeyInBox}`);
    event.target.remove();
    const box = document.querySelector(`#m${currentImageIndex}`);
    box.classList.add('box');

    box.classList.remove('centering');
    hitMonkey = true;
    score++
    console.log(`Score: ${score}`)



    //score show 
    scoreElement.textContent = score;

    
}

// function gameOver(){

//  // Release the progress variable by setting it false////////
//  startGameChangeInProgress = false;
// }




// This function looks to see if there is a monkey in the box. IF there is one, the game ends
// function checkForMonkey() {
//     // Is monkey in the box variable is > 0******
//     // he loss if the timer finsh befor he catchit 
//     if(monkeyInBox > 0){
//         setTimeout(function() {
//             console.log("u lost")
//             gameOver = true;
//             setup();
//         },2000)
//         console.log("above")
//         // clearInterval(monkeyIntervalId);
        
        
//     }
   


    // Game ends (stub - fill in with what happens if the game end)

    // else

    // Set the level

    // level = floor (rounds + 1 / 4) + 1
    // one level for every 4 rounds

    // if the level > 10

    // Set win state of the game

    // Return


    // if monkey time > 1 && monkey count >= 8

    // reset the monkey count

    // Remove 1/2 second from the monkey show time

    // call the function to show another monkey



// }/


// catch monkey function

// Add 1 to monkey catch count

// remove 1 from monkey in the box 

// remove the image from the click element

// Add the class 'box' to the div

// Remove the class centering to the div



// show the tow monkys at the same time after 4 times he catch the monky 
// function showMonkeyLevel(){

//     if (score >=9, monkeyShowTime(500) );
// }

// enable and disable start button
function enableStartButton(enable) {
    if (enable) {
        const startGameButton = document.getElementById('start');
        startGameButton.addEventListener('click', startGame);
    } else {
        const startGameButton = document.getElementById('start');
        startGameButton.removeEventListener("click", startGame);
    }
}

function startGame() {
    console.log("StartGame")
    gameOver = false;
    monkeyIntervalId = setInterval(showMonkey, 1000);
    // Disable 
    enableStartButton(false);
    // clearInterval(monkeyIntervalId);
    monkeyCaughtCount = 0;
    monkeyShowTime = 1000;
    monkeyInBox = 0;
    level = 1;
    rounds = 0;
    monkeyIntervalId;
    // initialPlay = true;
    // hitMonkey = false;
    score = 0
    // gameOver = false;
    

}

function setup() {
    // Attach click event listener
    enableStartButton(true);
    // Once click start game
}

// Add event listener on start button to call show monkey function
document.addEventListener('DOMContentLoaded', (event) => {
    //the event occurred
    setup();
})




















// ! count Down cood  !!!

// Set the date we're counting down to
var countDownDate = new Date("jul 14, 2023 11:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);









