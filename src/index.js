import _ from 'lodash';
import './style.css';
import DownArrowGif from './down.gif';
import * as Arrows from "../lib/arrow";
import Score from '../lib/score';
import Rating from '../lib/rating';
import ArrowExplosionDim from './Down_Tap_Explosion_Dim.png';
import ArrowExplosionBright from './Down_Tap_Explosion_Bright.png';

let arrowExplosionDim = new Image();
arrowExplosionDim.src = ArrowExplosionDim



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

document.body.appendChild(component());


let loop_button = document.createElement("button")
loop_button.innerText = "play"
loop_button.addEventListener('click', startgame)
document.body.appendChild(loop_button)
let canvas = document.getElementById("game-canvas");
canvas.width = 1280;

canvas.height = 720;
const ctx = canvas.getContext("2d")


window.AFRONOVA = document.getElementById("afronova");
 AFRONOVA.addEventListener('playing', () => { 
     loop();
     reader(moves);

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

let moves = [
    ['left', 25], ['left', 26], ['right', 27], ['right', 28],
    ['left', 29], ['left', 30], ['right', 31], ['right', 32],
    ['up', 33], ['down', 34], ['down', 35], ['right', 35.5], ['right', 36,],
    ['up', 37], ['down', 38], ['down', 39], ['left', 39.5], ['left', 40],
    

    ['down', 41], ['up', 42], ['right', 43], ['up', 43.5], ['right', 44],
    ['down', 45], ['up', 46], ['left', 47], ['up', 47.5], ['left', 48],
    ['right', 49], ['left', 50], ['down', 51], ['right', 51.5], ['left', 52],
    ['left', 53], ['right', 54], ['down', 55], ['left', 55.5], ['right', 56],
    ['up', 57], ['left', 58], ['up', 59], ['left', 59.5], ['up', 60],
    ['up', 61], ['right', 62], ['up', 63], ['right', 63.5], ['up', 64],

    ['left', 65], ['down', 65.5], ['left', 66], ['down', 66.5], 
    ['right', 67], ['down', 67.5], ['right', 68], ['down', 68.5],

    ['left', 69], ['up', 69.5], ['left', 70], ['up', 70.5], 
    ['right', 71], ['up', 71.5], ['right', 72], ['up', 72.5],

    ['left', 73], ['up', 73.5], ['right', 74], ['left', 74.5], 
    ['down', 75], ['right', 75.5], ['left', 76], ['up', 76.5],

    ['right', 77], ['left', 77.5], ['down', 78], ['right', 78.5], 
    ['left', 79], ['up', 79.5], ['right', 80],

    ['left', 81], ['down', 81.5], ['left', 82], ['down', 82.5], 
    ['right', 83], ['down', 83.5], ['right', 84], ['down', 84.5],

    ['left', 85], ['up', 85.5], ['left', 86], ['up', 86.5], 
    ['right', 87], ['up', 87.5], ['right', 88], ['up', 88.5], 
    
    ['left', 89], ['up', 89.5], ['right', 90], ['left', 90.5], 
    ['down', 91], ['right', 91.5], ['left', 92], ['up', 92.5], 
    
    
    ['right', 93], ['left', 93.5], ['down', 94], ['right', 94.5], 
    ['left', 95], ['up', 95.5], ['right', 96], 




    ['down', 97], ['up', 97], ['left', 98], ['right', 98],
    ['down', 99], ['up', 99], ['left', 100], ['right', 100],
    ['left', 101], ['down', 101], ['down', 102], ['right', 102],
    ['left', 103], ['right', 103], 

    ['down', 105], ['up', 105], ['left', 106], ['right', 106],
    ['down', 107], ['up', 107], ['left', 108], ['right', 108],
    ['left', 109], ['down', 109], ['down', 110], ['right', 110],
    ['left', 111], ['right', 111], 

    ['down', 113], ['up', 113], ['left', 114], ['right', 114],
    ['down', 115], ['up', 115], ['left', 116], ['right', 116],
    ['left', 117], ['down', 117], ['down', 118], ['right', 118],
    ['left', 119], ['right', 119], 

    ['down', 121], ['up', 121], ['left', 122], ['right', 122],
    ['down', 123], ['up', 123], ['left', 124], ['right', 124],
    ['left', 125], ['down', 125], ['down', 126], ['right', 126],
    ['left', 127], ['right', 127], 



    ['up', 129], ['left', 129.5], ['up', 130],
    ['down', 131], ['right', 131.5], ['down', 132],
    ['up', 133], ['left', 133.5], ['up', 134], ['left', 134.5],
    ['right', 135], ['down', 135.5], ['right', 136],
    
    ['down', 137], ['right', 137.5], ['down', 138],
    ['up', 139], ['left', 139.5], ['up', 140],
    ['down', 141], ['right', 141.5], ['down', 142], ['right', 142.5],
    ['left', 143], ['up', 143.5], ['left', 144],

    ["left", 145], ["up", 145.5], ['down', 146],
    ["right", 147], ["down", 147.5], ['up', 148],
    ["left", 149], ["up", 149.5], ['down', 150],['right', 150.5],
    ["down", 151], ["up", 151.5], ['left', 152],

    ["right", 153], ["up", 153.5], ['down', 154],
    ["left", 155], ["down", 155.5], ['up', 156],
    ["right", 157], ["up", 157.5], ['down', 158],['left', 158.5],
    ["down", 159], ["up", 159.5], ['right', 160],

    ['left', 161], ['right', 161], ['up', 162], 
    ['right', 163], ['down', 163.5], ["left", 164],
    ['left', 165], ['up', 165], ['right', 166], 
    ['up', 167], ['left', 167.5], ["right", 168],

    ['down', 169], ['up', 169], ['up', 170], 
    ['left', 171], ['right', 171.5], ["down", 172],
    ['left', 173], ['down', 173], ['up', 174], 
    ['right', 175], ['up', 175.5], ["left", 176],

    ['up', 177], ['right', 177], ['down', 178], 
    ['right', 179], ['up', 179.5], ["down", 180],
    ['down', 181], ['right', 181], ['up', 182], 
    ['right', 183], ['up', 183.5], ["left", 184],
    
    ['left', 186], ['right', 188],
    ['up', 190], ['left', 190.75], 
    ['right', 191.5], ['left', 192.25],

    ['down', 193],['down', 194], ['up', 194], 
    ['left', 195], ['right', 195], ['down', 196], ['up', 196.5],
    ['down', 197],['up', 197.5], ['left', 198], 
    ['up', 198.5], ['left', 199], ['right', 200], ['up', 200.5],

    ['right', 201],['up', 202], ['right', 202.5], 
    ['up', 203], ['down', 203.5], ['up', 204], ['left', 204.5],

    ['up', 205],['right', 206], ['down', 206.5], 
    ['right', 207], ['left', 208], ['down', 208.5], 

    ['up', 209], ['up', 210], ['right', 210.5], ['up', 211],
    ['up', 212], ['left', 212.5],

    ['up', 213], ['up', 214], ['right', 214.5], ['up', 215],
    ['down', 215.5], ['up', 216], ['left', 216.5],

    ['up', 217], ['down', 218], ['up', 219], ['left', 220], ['right', 220],

    ['left', 221], ['down', 221], ['right', 222],
    ['up', 223], ['right', 223.5], ['up', 224], ['down', 224.5],

    ['up', 225], ['left', 225.5], ['up', 226],
    ['down', 227], ['down', 228], ['up', 228],

    ['down', 229], ['right', 229], ['left', 230],
    ['up', 231], ['right', 231.5], ['up', 232], ['down', 232.5],

    ['up', 233], ['left', 233.5], ['up', 234], 
    ['left', 235], ['up', 236], ['right', 236],

    ['down', 237], ['up', 237], ['right', 238],
    ['up', 239], ['right', 239.5], ['up', 240], ['down', 240.5],

    ['up', 241], ['left', 241.5], ['up', 242],
    ['right', 243], ['left', 244], ['up', 244],

    ['left', 245], ['down', 245], ['right', 246],
    ['up', 247], ['right', 247.5], ['up', 248], ['down', 248.5],

    ['up', 249], ['left', 249.5], ['up', 250], 
    ['up', 251], ['left', 251.5], ['right', 252], ['up', 252.5],

    ['down', 253], ['left', 253.5], ['right', 254], ['down', 254.5],
    ['up', 255], ['left', 255.5], ['down', 256], ['up', 256.5],

    ['right', 257], ['down', 257.5], ['up', 258], 
    ['left', 259], ['right', 259], ['left', 260], ['down', 260],

    ['left', 261], ['right', 261], ['down', 262], ['right', 262],
    ['left', 263], ['down', 263.5], ['left', 264], ['up', 264.5],

    ['right', 265], ['left', 265.5], ['down', 266],
    ['up', 267], ['right', 267.5], ['left', 268], ['up', 268.5],

    ['down', 269], ['right', 269.5], ['left', 270], ['down', 270.5],
    ['up', 271], ['right', 271.5], ['down', 272], ['up', 272.5],

    ['left', 273], ['down', 273.5], ['up', 274],
    ['left', 275], ['right', 275], ['down', 276], ['right', 276],

    ['left', 277], ['right', 277], ['left', 278], ['down', 278],
    ['right', 279], ['down', 279.5], ['right', 280], ['up', 280.5],

    ['left', 281], ['right', 281.5], ['down', 282],
    ['left', 283], ['right', 283],

    ['left', 285], ['right', 285],
    ['down', 285.6666], ['up', 285.6666],
    ['left', 286.3333], ['down', 286.3333],
    ['down', 287], ['right', 287],
    ['up', 287.6666], ['right', 287.6666],
    ['left', 288.3333], ['up', 288.3333],

    ['down', 289], ['up', 289]




]


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
    // AFRONOVA.play();
    // AFRONOVA.muted = false ;
    arr.forEach(tuple => {
        // setTimeout(() => {
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
        // }, tuple[1] * 300)

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

   
    // leftMovingArrow.y -= 6
    // downMovingArrow.y -= 6
    // upMovingArrow.y -= 6
    // rightMovingArrow.y -= 6
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    visible.forEach(arrow => {
        arrow.time = current_beat - arrow.start
        // const percent = arrow.time/4
        // arrow.y = (1 - percent) * 640 + 80
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