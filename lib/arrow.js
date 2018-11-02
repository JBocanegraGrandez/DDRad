import LeftArrow from "../src/staticLeft.png";
import DownArrow from "../src/staticDown.png";
import UpArrow from "../src/staticUp.png";
import RightArrow from "../src/staticRight.png";
import ArrowSprites from "../src/arrows_sprites.png";
import ArrowContainer from "../src/arrow_container.png";
import { createContext } from "vm";



export class leftMovingArrow {
    constructor(y, arr) {
        this.arrowSprite = new Image();
        this.arrowSprite.src = ArrowSprites;
        this.y = y;
        this.arr = arr;
        this.type ="left";
        this.distance = 0
        this.start = Math.floor((AFRONOVA.currentTime * 1000) / 300);
    }
    
     draw(ctx, s) {
         var rads = 90 * Math.PI*2.0/360.0;
         ctx.translate(200, this.y)
        ctx.rotate(rads)
        ctx.drawImage(
            this.arrowSprite, 
            s, 0, 64, 64,
            0, 0, 96, 96
             )
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

    remove() {
        let idx = this.arr.indexOf(this)
        this.arr.splice(idx, 1)
    }
};

export class downMovingArrow {
    constructor(y, arr) {
        this.arrowSprite = new Image();
        this.arrowSprite.src = ArrowSprites;
        this.y = y;
        this.arr = arr
        this.type = "down"
        this.distance = 0
        this.start = Math.floor(AFRONOVA.currentTime * 1000 / 300);

    }

    draw(ctx, s) {
        ctx.drawImage(
            this.arrowSprite,
            s, 0, 64, 64,
            200, this.y, 96, 96
        )
    }

    remove() {
        let idx = this.arr.indexOf(this)
        this.arr.splice(idx, 1)
    }
}


export class upMovingArrow {
    constructor(y, arr) {
        this.arrowSprite = new Image();
        this.arrowSprite.src = ArrowSprites;
        this.y = y
        this.arr = arr
        this.type = "up"
        this.distance = -96
        this.start = Math.floor(AFRONOVA.currentTime * 1000 / 300);

    }

    draw(ctx, s) {
        var rads = 180 * Math.PI * 2.0 / 360.0;
        ctx.translate(392, this.y)
        ctx.rotate(rads)
        ctx.drawImage(
            this.arrowSprite,
            s, 0, 64, 64,
            0, 0, 96, 96
        )
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

    remove() {
        let idx = this.arr.indexOf(this)
        this.arr.splice(idx, 1)
    }
};

export class rightMovingArrow {
    constructor(y, arr) {
        this.arrowSprite = new Image();
        this.arrowSprite.src = ArrowSprites;
        this.y = y
        this.arr = arr
        this.type = "right"
        this.distance = -96
        this.start = Math.floor((AFRONOVA.currentTime * 1000) / 300);

    }

    draw(ctx, s) {
        var rads = 270 * Math.PI * 2.0 / 360.0;
        ctx.translate(392, this.y)
        ctx.rotate(rads)
        ctx.drawImage(
            this.arrowSprite,
            s, 0, 64, 64,
            0, 0, 96, 96
        )
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

    remove() {
        let idx = this.arr.indexOf(this)
        this.arr.splice(idx, 1)
    }
};






export class downStaticArrow {
    constructor(y) {
        this.arrowSprite = new Image();
        this.arrowSprite.src = ArrowContainer;
        this.y = y
    }

    draw(ctx, s) {
        ctx.drawImage(
            this.arrowSprite,
            s, 0, 64, 64,
            200, this.y, 96, 96
        )
    }
}

export class leftStaticArrow {
    constructor(y) {
        this.arrowSprite = new Image();
        this.arrowSprite.src = ArrowContainer;
        this.y = y
    }

    draw(ctx, s) {
        var rads = 90 * Math.PI * 2.0 / 360.0;
        ctx.translate(200, this.y)
        ctx.rotate(rads)
        ctx.drawImage(
            this.arrowSprite,
            s, 0, 64, 64,
            0, 0, 96, 96
        )
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
};

export class upStaticArrow {
    constructor(y) {
        this.arrowSprite = new Image();
        this.arrowSprite.src = ArrowContainer;
        this.y = y
    }

    draw(ctx, s) {
        var rads = 180 * Math.PI * 2.0 / 360.0;
        ctx.translate(392, this.y + 96)
        ctx.rotate(rads)
        ctx.drawImage(
            this.arrowSprite,
            s, 0, 64, 64,
            0, 0, 96, 96
        )
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
};


export class rightStaticArrow {
    constructor(y) {
        this.arrowSprite = new Image();
        this.arrowSprite.src = ArrowContainer;
        this.y = y
    }

    draw(ctx, s) {
        var rads = 270 * Math.PI * 2.0 / 360.0;
        ctx.translate(392, this.y + 96)
        ctx.rotate(rads)
        ctx.drawImage(
            this.arrowSprite,
            s, 0, 64, 64,
            0, 0, 96, 96
        )
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
};