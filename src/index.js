import _ from 'lodash';
import './style.css';
import DownArrowGif from './down.gif';
import DownArrow from './arrows_sprites.png'
import * as Arrows from "../lib/arrow"




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

var downArrow = new Image();
downArrow.src = DownArrow;
downArrow.onload = () =>{
    ctx.drawImage(downArrow, 0,0,64,64,
        0, 80, 96, 96)
}
window.AFRONOVA = document.getElementById("afronova");
 AFRONOVA.addEventListener('playing', () => { 
     loop();
     reader(moves);

    })
    // AFRONOVA.load();
// arrows for testing

let leftMovingArrow = new Arrows.leftMovingArrow(720);
let downMovingArrow = new Arrows.downMovingArrow(720);
let upMovingArrow = new Arrows.upMovingArrow(816);
let rightMovingArrow = new Arrows.rightMovingArrow(816);

let downStaticArrow = new Arrows.downStaticArrow(80)
let leftStaticArrow = new Arrows.leftStaticArrow(80)
let upStaticArrow = new Arrows.upStaticArrow(80)
let rightStaticArrow = new Arrows.rightStaticArrow(80)

// operations for beat-arrows_sprites relationship
var beat = 0
var beat2 = 0
var frame = 0;
var x = 0
// AFRONOVA CODE
// let moves = [
//     ['left', 25], ['left', 26], ['right', 27], ['right', 28],
//     ['left', 29], ['left', 30], ['right', 31], ['right', 32],
//     ['up', 33], ['down', 34], ['down', 35], ['right', 36,],
//     ['up', 37], ['down', 38], ['down', 39], ['left', 40],
    

//     ['down', 41], ['up', 42], ['right', 43], ['right', 44],
//     ['down', 45], ['up', 46], ['left', 47], ['left', 48],
//     ['right', 49], ['left', 50], ['down', 51],  ['left', 52],
//     ['left', 53], ['right', 54], ['down', 55], ['right', 56],
//     ['up', 57], ['left', 58], ['up', 59], ['up', 60],
//     ['up', 61], ['right', 62], ['up', 63], ['up', 64],

//     ['left', 65], ['left', 66],
//     ['right', 67], ['right', 68],

//     ['left', 69], ['up', 69.5], ['left', 70], ['up', 70.5], 
//     ['right', 71], ['up', 71.5], ['right', 72], ['up', 72.5],

//     ['left', 73], ['up', 73.5], ['right', 74], ['left', 74.5], 
//     ['down', 75], ['right', 75.5], ['left', 76], ['up', 76.5],

//     ['right', 77], ['left', 77.5], ['down', 78], ['right', 78.5], 
//     ['left', 79], ['up', 79.5], ['right', 80],

//     ['left', 81], ['down', 81.5], ['left', 82], ['down', 82.5], 
//     ['right', 83], ['down', 83.5], ['right', 84], ['down', 84.5],

//     ['left', 85], ['up', 85.5], ['left', 86], ['up', 86.5], 
//     ['right', 87], ['up', 87.5], ['right', 88], ['up', 88.5], 
    
//     ['left', 89], ['up', 89.5], ['right', 90], ['left', 90.5], 
//     ['down', 91], ['right', 91.5], ['left', 92], ['up', 92.5], 
    
    
//     ['right', 93], ['left', 93.5], ['down', 94], ['right', 94.5], 
//     ['left', 95], ['up', 95.5], ['right', 96], 




//     ['down', 97], ['up', 97], ['left', 98], ['right', 98],
//     ['down', 99], ['up', 99], ['left', 100], ['right', 100],
//     ['left', 101], ['down', 101], ['down', 102], ['right', 102],
//     ['left', 103], ['right', 103], 

//     ['down', 105], ['up', 105], ['left', 106], ['right', 106],
//     ['down', 107], ['up', 107], ['left', 108], ['right', 108],
//     ['left', 109], ['down', 109], ['down', 110], ['right', 110],
//     ['left', 111], ['right', 111], 

//     ['down', 113], ['up', 113], ['left', 114], ['right', 114],
//     ['down', 115], ['up', 115], ['left', 116], ['right', 116],
//     ['left', 117], ['down', 117], ['down', 118], ['right', 118],
//     ['left', 119], ['right', 119], 

//     ['down', 121], ['up', 121], ['left', 122], ['right', 122],
//     ['down', 123], ['up', 123], ['left', 124], ['right', 124],
//     ['left', 125], ['down', 125], ['down', 126], ['right', 126],
//     ['left', 127], ['right', 127], 



//     ['up', 129], ['left', 129.5], ['up', 130],
//     ['down', 131], ['right', 131.5], ['down', 132],
//     ['up', 133], ['left', 133.5], ['up', 134], ['left', 134.5],
//     ['right', 135], ['down', 135.5], ['right', 136],
    
//     ['up', 129], ['left', 129.5], ['up', 130],
//     ['down', 131], ['right', 131.5], ['down', 132],
//     ['up', 133], ['left', 133.5], ['up', 134], ['left', 134.5],
//     ['right', 135], ['down', 135.5], ['right', 136],

// ]
// let moves = [
//     ['left', 25], ['left', 26], ['right', 27], ['right', 28],
//     ['left', 29], ['left', 30], ['right', 31], ['right', 32],
//     ['up', 33], ['down', 34], ['down', 35], ['right', 35.5], ['right', 36,],
//     ['up', 37], ['down', 38], ['down', 39], ['left', 39.5], ['left', 40],
    

//     ['down', 41], ['up', 42], ['right', 43], ['up', 43.5], ['right', 44],
//     ['down', 45], ['up', 46], ['left', 47], ['up', 47.5], ['left', 48],
//     ['right', 49], ['left', 50], ['down', 51], ['right', 51.5], ['left', 52],
//     ['left', 53], ['right', 54], ['down', 55], ['left', 55.5], ['right', 56],
//     ['up', 57], ['left', 58], ['up', 59], ['left', 59.5], ['up', 60],
//     ['up', 61], ['right', 62], ['up', 63], ['right', 63.5], ['up', 64],

//     ['left', 65], ['down', 65.5], ['left', 66], ['down', 66.5], 
//     ['right', 67], ['down', 67.5], ['right', 68], ['down', 68.5],

//     ['left', 69], ['up', 69.5], ['left', 70], ['up', 70.5], 
//     ['right', 71], ['up', 71.5], ['right', 72], ['up', 72.5],

//     ['left', 73], ['up', 73.5], ['right', 74], ['left', 74.5], 
//     ['down', 75], ['right', 75.5], ['left', 76], ['up', 76.5],

//     ['right', 77], ['left', 77.5], ['down', 78], ['right', 78.5], 
//     ['left', 79], ['up', 79.5], ['right', 80],

//     ['left', 81], ['down', 81.5], ['left', 82], ['down', 82.5], 
//     ['right', 83], ['down', 83.5], ['right', 84], ['down', 84.5],

//     ['left', 85], ['up', 85.5], ['left', 86], ['up', 86.5], 
//     ['right', 87], ['up', 87.5], ['right', 88], ['up', 88.5], 
    
//     ['left', 89], ['up', 89.5], ['right', 90], ['left', 90.5], 
//     ['down', 91], ['right', 91.5], ['left', 92], ['up', 92.5], 
    
    
//     ['right', 93], ['left', 93.5], ['down', 94], ['right', 94.5], 
//     ['left', 95], ['up', 95.5], ['right', 96], 




//     ['down', 97], ['up', 97], ['left', 98], ['right', 98],
//     ['down', 99], ['up', 99], ['left', 100], ['right', 100],
//     ['left', 101], ['down', 101], ['down', 102], ['right', 102],
//     ['left', 103], ['right', 103], 

//     ['down', 105], ['up', 105], ['left', 106], ['right', 106],
//     ['down', 107], ['up', 107], ['left', 108], ['right', 108],
//     ['left', 109], ['down', 109], ['down', 110], ['right', 110],
//     ['left', 111], ['right', 111], 

//     ['down', 113], ['up', 113], ['left', 114], ['right', 114],
//     ['down', 115], ['up', 115], ['left', 116], ['right', 116],
//     ['left', 117], ['down', 117], ['down', 118], ['right', 118],
//     ['left', 119], ['right', 119], 

//     ['down', 121], ['up', 121], ['left', 122], ['right', 122],
//     ['down', 123], ['up', 123], ['left', 124], ['right', 124],
//     ['left', 125], ['down', 125], ['down', 126], ['right', 126],
//     ['left', 127], ['right', 127], 



//     ['up', 129], ['left', 129.5], ['up', 130],
//     ['down', 131], ['right', 131.5], ['down', 132],
//     ['up', 133], ['left', 133.5], ['up', 134], ['left', 134.5],
//     ['right', 135], ['down', 135.5], ['right', 136],
    
//     ['up', 129], ['left', 129.5], ['up', 130],
//     ['down', 131], ['right', 131.5], ['down', 132],
//     ['up', 133], ['left', 133.5], ['up', 134], ['left', 134.5],
//     ['right', 135], ['down', 135.5], ['right', 136],

// ]
// let moves = [
//     ['left', 1], ['left', 2], ['right', 3], ['right', 4],
//     ['left', 5], ['left', 6], ['right', 7], ['right', 8],
//     ['up', 9], ['down', 10], ['down', 11], ['right', 11.5], ['right', 12,],
//     ['up', 13], ['down', 14], ['down', 15], ['left', 15.5], ['left', 16],
//     ['down', 17], ['up', 18], ['right', 19], ['up', 19.5], ['right', 20],
// ]

// let moves = [
//     ['down', 1], ['down', 1], ['down', 3], ['down', 4],
//     ['down', 5], ['down', 6], ['down', 7], ['down', 8],
//     ['up', 9], ['down', 10], ['down', 11], ['down', 12],
//     ['down', 13], ['down', 14], ['down', 15], ['down', 16],
//     ['down', 17], ['down', 18], ['down', 19], ['down', 20],
//     ['up', 21], ['down', 22], ['down', 23], ['down', 24],
// ]
// let moves = [["left", 4], ["left", 5], ['down', 6]]
let moves = [
    ["left", 1],
    ['left', 2],
    ['left', 3],
    ['left', 4],
    // ['left', 5],
    // ['left', 6],
    // ['left', 7],
    // ['left', 8],
    // ['left', 8],
    // ['left', 9],
    // ['left', 10],
    // ['left', 11],
    // ['left', 12],
    // ['left', 13],
    // ['left', 14],
    // ['left', 15],
    // ['left', 16],
    // ['left', 17],
    // ['left', 18],
    // ['left', 19],
    // ['left', 20],
    // ['left', 21],
    // ['left', 22],
    // ['left', 23],
    // ['left', 23.5],
]
// let moves = [["left", 1], ['right', 1]]

const visible = []

function startgame (timestamp) {
    AFRONOVA.play()
    
}

function removeIfValid (direction) {
    visible.forEach(arrow => {
        if (arrow.type !== direction) {
            return 
        } else {
            // console.log(arrow.y)
            // console.log(arrow.distance + arrow.y)
            if (arrow.distance + arrow.y > 60 && arrow.y + arrow.distance < 100) {
                arrow.remove()
            }
        }
    })
}

function reader(arr) {
    // AFRONOVA.play();
    // AFRONOVA.muted = false ;
    arr.forEach(tuple => {
        setTimeout(() => {
            let newarrow = null
            switch (tuple[0]){
             case "left":
                newarrow = new Arrows.leftMovingArrow(720, visible);
                break
            }
            switch (tuple[0]){
             case "down":
                newarrow = new Arrows.downMovingArrow(720, visible);
                break
            }
            switch (tuple[0]){
             case "up":
                newarrow = new Arrows.upMovingArrow(816, visible);
                break
            }
            switch (tuple[0]){
             case "right":
                newarrow = new Arrows.rightMovingArrow(816, visible);
                break
            }
            visible.push(newarrow)
        }, tuple[1] * 300)

    });
}



function loop() {
    const timestamp = AFRONOVA.currentTime * 1000;
    // console.log("loop played")
    beat = Math.floor(timestamp/300);
    const current_beat = timestamp/300
    console.log(beat)
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
        const percent = arrow.time/4
        arrow.y = (1 - percent) * 640 + 80

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

    
    // console.log(beat)
    

    
}
// window.requestAnimationFrame(loop); 


window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
    
    switch(e.keyCode) {
        case 65:
            console.log("The 'a' key is pressed.");
            removeIfValid("left");
            break;
        case 83:
            console.log("The 's' key is pressed.");
            removeIfValid("down");
            break;
        case 68:
            console.log("The 'd' key is pressed.");
            removeIfValid("right");
            break;
        case 87:
            console.log("The 'w' key is pressed.");
            removeIfValid("up");
            break;
        case 37:
            e.preventDefault();
            console.log("The 'left' key is pressed.");
            // visible[0].remove();
            removeIfValid("left");
            break;
        case 38:
            e.preventDefault();
            console.log("The 'up' key is pressed.");
            removeIfValid("up");
            break;
        case 39:
            e.preventDefault();
            console.log("The 'right' key is pressed.");
            removeIfValid("right");
            break;
        case 40:
            e.preventDefault();
            console.log("The 'down' key is pressed.");
            removeIfValid("down");
            break;
    }
}