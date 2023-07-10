

// the boxs contani//
const dad = document.querySelector('.mom');

// ganerait the box 
for (let i = 0; i < 46; i++) {
    let div = document.createElement('div');
    div.classList.add(`box`);
    div.setAttribute('id',`m${i}`)
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


// Create a new image element
const image = new Image();
image.src = images[0];
image.classList.add('images');
image.setAttribute('id', `i${currentImageIndex}`);


// Add the image to the box
const box = document.querySelector(`#m${currentImageIndex}`);
box.appendChild(image);


//centering the image from css 
box.classList.add('centering')


//riplace the image with the box
box.classList.remove('box')


// Show the image
image.classList.add('active');


//randomly show for the monky 


//click the start bouton to show the monky 


// Set a timer for showig the monky 4s


//if he catch randomly go to the next box and hide the one he catchit 


// he loss if the timer finsh befor he catchit 


//The time decreases every 8 times i catch the monky 4s--->0.5s


// show the tow monkys at the same time after 4 times he catch the monky 


// eich 4 times i catch the monky count 1 level 


// put a counter level till level 10 


//wen he reich level 10 let the monky dans 


