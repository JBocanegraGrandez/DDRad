import _ from 'lodash';
import './style.css';
import DownArrowGif from './down.gif';
import * as Arrows from "../lib/arrow";
import Score from '../lib/score';
import Rating from '../lib/rating';
import ArrowExplosionDim from './Down_Tap_Explosion_Dim.png';
import ArrowExplosionBright from './Down_Tap_Explosion_Bright.png';
import movesEasy from '../lib/afronova_easy'
import movesHard from '../lib/afronova_hard'

let movesDifficulty = {
    easy: movesEasy,
    hard: movesHard
}

let arrowExplosionDim = new Image();
arrowExplosionDim.src = ArrowExplosionDim

let startButton = document.getElementById("wm-2")
startButton.onclick=hideMenuAndStart



function hideMenuAndStart() {
    console.log('buttonworks')
    document.getElementById("game-canvas").removeAttribute("hidden")
    document.getElementById("welcome-menu").setAttribute("hidden", true)
    document.getElementById("welcome-menu").removeAttribute("class")
    document.getElementById("wm-1").setAttribute("hidden", true)
    document.getElementById("wm-2").setAttribute("hidden", true)
    document.getElementById("play-audio").removeAttribute("hidden")
    document.getElementById("pause-audio").removeAttribute("hidden")
    loop_button.removeAttribute("hidden")
    startgame()
}

function component() {
    let element = document.createElement('div');
    
    element.innerHTML = _.join(['DDrad', '3rd mix'], ' ');
    element.classList.add('hello');
    
    // Add the image to our existing div.
    var downArrowGif = new Image();
    downArrowGif.src = DownArrowGif;
    
    element.appendChild(downArrowGif);
    
    return element;
}

document.body.prepend(component());


let loop_button = document.createElement("button")
loop_button.innerText = "play"
loop_button.className = "game-button"
loop_button.setAttribute("hidden", true)
loop_button.addEventListener('click', startgame)
document.body.appendChild(loop_button)
let canvas = document.getElementById("game-canvas");
canvas.width = 1280;

canvas.height = 720;
const ctx = canvas.getContext("2d")


window.AFRONOVA = document.getElementById("afronova");
 AFRONOVA.addEventListener('playing', () => { 
     loop();
     reader(movesEasy);

    })
let score = new Score
let rating = new Rating
let leftMovingArrow = new Arrows.leftMovingArrow;
let downMovingArrow = new Arrows.downMovingArrow;
let upMovingArrow = new Arrows.upMovingArrow;
let rightMovingArrow = new Arrows.rightMovingArrow;

let downStaticArrow = new Arrows.downStaticArrow(80)
let leftStaticArrow = new Arrows.leftStaticArrow(80)
let upStaticArrow = new Arrows.upStaticArrow(80)
let rightStaticArrow = new Arrows.rightStaticArrow(80)

let staticHash = {
    "left": leftStaticArrow,
    "down": downStaticArrow,
    "up": upStaticArrow,
    "right": rightStaticArrow,
}

// operations for beat-arrows_sprites relationship
var beat = 0
var beat2 = 0
var frame = 0;
var x = 0




const visible = []

function startgame (timestamp) {
    AFRONOVA.play()
}

function removeIfValid (direction) {
    visible.forEach(arrow => {
        if (arrow.type !== direction) {
            // console.log('arrowsprite')
            return 
        } else {
            // console.log(arrow.y)
            // console.log(arrow.distance + arrow.y)
            if (arrow.distance + arrow.y > 50 && arrow.y + arrow.distance < 120) {
                staticHash[direction].makeItShine()
                arrow.remove()
                score.score += 10
                rating.rating = 'Great'
            }
    
        }
    })
}

function reader(arr) {

    arr.forEach(tuple => {
            let newarrow = null
            switch (tuple[0]){
             case "left":
                newarrow = new Arrows.leftMovingArrow(720, visible, tuple[1]);
                break
            }
            switch (tuple[0]){
             case "down":
                newarrow = new Arrows.downMovingArrow(720, visible, tuple[1]);
                break
            }
            switch (tuple[0]){
             case "up":
                newarrow = new Arrows.upMovingArrow(816, visible, tuple[1]);
                break
            }
            switch (tuple[0]){
             case "right":
                newarrow = new Arrows.rightMovingArrow(816, visible, tuple[1]);
                break
            }
            visible.push(newarrow)

    });
}



function loop() {
    const timestamp = AFRONOVA.currentTime * 1000;
    // console.log("loop played")
    beat = Math.floor(timestamp/300) ;
    const current_beat = timestamp/300 - 3
    // console.log(beat)
    // console.log(visible)
    var frame = beat % 4;
    var x = frame * 64; 

    beat2 = Math.floor(timestamp/150);
    var container_frame = beat2 % 2;
    var cf = container_frame * 64; 
   
    window.requestAnimationFrame(loop);

   
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    visible.forEach(arrow => {
        arrow.time = current_beat - arrow.start

        arrow.y = arrow.set_y(current_beat)
        
        arrow.draw(ctx, x);
    })

    downMovingArrow.draw(ctx, x)
    leftMovingArrow.draw(ctx, x)
    upMovingArrow.draw(ctx, x)
    rightMovingArrow.draw(ctx, x)

    downStaticArrow.draw(ctx, cf)
    leftStaticArrow.draw(ctx, cf)
    upStaticArrow.draw(ctx, cf)
    rightStaticArrow.draw(ctx, cf)

    score.draw(ctx)
    rating.draw(ctx)
    // console.log(beat)
    

    
}
// window.requestAnimationFrame(loop); 


window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
    
    switch(e.keyCode) {
        case 65:
            // console.log("The 'a' key is pressed.");
            removeIfValid("left");
            break;
        case 83:
            // console.log("The 's' key is pressed.");
            removeIfValid("down");
            break;
        case 68:
            // console.log("The 'd' key is pressed.");
            removeIfValid("right");
            break;
        case 87:
            // console.log("The 'w' key is pressed.");
            removeIfValid("up");
            break;
        case 37:
            e.preventDefault();
            // console.log("The 'left' key is pressed.");
            // visible[0].remove();
            removeIfValid("left");
            break;
        case 38:
            e.preventDefault();
            // console.log("The 'up' key is pressed.");
            removeIfValid("up");
            break;
        case 39:
            e.preventDefault();
            // console.log("The 'right' key is pressed.");
            removeIfValid("right");
            break;
        case 40:
            e.preventDefault();
            // console.log("The 'down' key is pressed.");
            removeIfValid("down");
            break;
    }
}