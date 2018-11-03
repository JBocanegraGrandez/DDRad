import LeftArrow from "../src/staticLeft.png";
import DownArrow from "../src/staticDown.png";
import UpArrow from "../src/staticUp.png";
import RightArrow from "../src/staticRight.png";
import ArrowSprites from "../src/arrows_sprites.png";
import ArrowContainer from "../src/arrow_container.png";
import ArrowExplosionDim from "../src/Down_Tap_Explosion_Dim.png";
import ArrowExplosionBright from "../src/Down_Tap_Explosion_Bright.png";




export class leftMovingArrow {
    constructor(y, arr, beat) {
        this.arrowSprite = new Image();
        this.arrowSprite.src = ArrowSprites;
        this.type ="left";
        this.distance = 0
        this.start = Math.floor((AFRONOVA.currentTime * 1000) / 300);
        this.beat = beat
        this.starty = 96 * beat + 80
        this.y = this.set_y(0)
        this.arr = arr
        // console.log(this.y)
    }

    set_y(fractbeat) {
        return (this.beat - fractbeat) * 96 + 80
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
    constructor(y, arr, beat) {
        this.arrowSprite = new Image();
        this.arrowSprite.src = ArrowSprites;
        this.type = "down"
        this.distance = 0
        this.start = Math.floor(AFRONOVA.currentTime * 1000 / 300);
        this.beat = beat;
        this.starty = 96 * beat + 80;
        this.y = this.set_y(0);
        this.arr = arr

    }

    set_y(fractbeat) {
        return (this.beat - fractbeat) * 96 + 80;
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
         constructor(y, arr, beat) {
           this.arrowSprite = new Image();
           this.arrowSprite.src = ArrowSprites;
           this.type = "up";
           this.distance = -96;
           this.start = Math.floor((AFRONOVA.currentTime * 1000) / 300);
           this.beat = beat;
           this.starty = 96 * beat + 80;
           this.y = this.set_y(0);
           this.arr = arr;
         }

         set_y(fractbeat) {
             return (this.beat - fractbeat) * 96 + 80 + 96
         }

         draw(ctx, s) {
           var rads = (180 * Math.PI * 2.0) / 360.0;
           ctx.translate(392, this.y);
           ctx.rotate(rads);
           ctx.drawImage(this.arrowSprite, s, 0, 64, 64, 0, 0, 96, 96);
           ctx.setTransform(1, 0, 0, 1, 0, 0);
         }

         remove() {
           let idx = this.arr.indexOf(this);
           this.arr.splice(idx, 1);
         }
       };

export class rightMovingArrow {
    constructor(y, arr, beat) {
        this.arrowSprite = new Image();
        this.arrowSprite.src = ArrowSprites;
        this.type = "right"
        this.distance = -96
        this.start = Math.floor((AFRONOVA.currentTime * 1000) / 300);
        this.beat = beat
        this.starty = 96 * beat + 80;
        this.y = this.set_y(0)
        this.arr = arr

    }

    set_y(fractbeat) {
        return (this.beat - fractbeat) * 96 + 80  + 96
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
        this.arrowExplosionDim = new Image();
        this.arrowExplosionDim.src = ArrowExplosionDim;
        this.arrowExplosionBright = new Image();
        this.arrowExplosionBright.src = ArrowExplosionBright;
        this.y = y;
        this.shine = 0;
    }

    makeItDark() {
        this.shine = 2
        setTimeout(this.makeItBoom.bind(this), 100)
    }
    makeItBoom() {
        this.shine = 0
    }

    makeItShine() {
        this.shine = 1
        setTimeout(this.makeItDark.bind(this), 100)
    }

    draw(ctx, s) {
        ctx.drawImage(
            this.arrowSprite,
            s, 0, 64, 64,
            200, this.y, 96, 96
        )

        if (this.shine === 1) {
          
            ctx.drawImage(
                this.arrowExplosionDim,
                0, 0, 64, 64,
                200, this.y, 96, 96
            )
           

        }
        if (this.shine === 2) {
           
            ctx.drawImage(
                this.arrowExplosionBright,
                0, 0, 64, 64,
                200, this.y, 96, 96
            )
            

        }
    }
}

export class leftStaticArrow {
    constructor(y) {
        this.arrowSprite = new Image();
        this.arrowSprite.src = ArrowContainer;
        this.arrowExplosionDim = new Image();
        this.arrowExplosionDim.src = ArrowExplosionDim;
        this.arrowExplosionBright = new Image();
        this.arrowExplosionBright.src = ArrowExplosionBright;
        this.y = y
        this.shine = 0
    }

    makeItDark() {
        this.shine = 2 
        setTimeout(this.makeItBoom.bind(this), 100)
    }
    makeItBoom() {
        this.shine = 0 
    }
    
    makeItShine() {
        this.shine = 1
        setTimeout(this.makeItDark.bind(this), 100)
    }

    draw(ctx, s) {
        // if(this.shine === 3) { debugger}
        var rads = 90 * Math.PI * 2.0 / 360.0;
        ctx.translate(200, this.y)
        ctx.rotate(rads)
        // console.log(this.shine)
        ctx.drawImage(
            this.arrowSprite,
            s, 0, 64, 64,
            0, 0, 96, 96
        )
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        
        if(this.shine === 1) {
            // console.log('i am here')
            var rads = 90 * Math.PI * 2.0 / 360.0;
            ctx.translate(200, this.y)
            ctx.rotate(rads)
            ctx.drawImage(
                this.arrowExplosionDim,
                0, 0, 64, 64,
                0, 0, 96, 96
            )
            ctx.setTransform(1, 0, 0, 1, 0, 0);

        }
        if(this.shine === 2) {
            // console.log('i am here')
            var rads = 90 * Math.PI * 2.0 / 360.0;
            ctx.translate(200, this.y)
            ctx.rotate(rads)
            ctx.drawImage(
                this.arrowExplosionBright,
                0, 0, 64, 64,
                0, 0, 96, 96
            )
            ctx.setTransform(1, 0, 0, 1, 0, 0);

        }
    }
};

export class upStaticArrow {
    constructor(y) {
        this.arrowSprite = new Image();
        this.arrowSprite.src = ArrowContainer;
        this.arrowExplosionDim = new Image();
        this.arrowExplosionDim.src = ArrowExplosionDim;
        this.arrowExplosionBright = new Image();
        this.arrowExplosionBright.src = ArrowExplosionBright;
        this.y = y
        this.shine = 0
    }

    makeItDark() {
        this.shine = 2
        setTimeout(this.makeItBoom.bind(this), 100)
    }
    makeItBoom() {
        this.shine = 0
    }

    makeItShine() {
        this.shine = 1
        setTimeout(this.makeItDark.bind(this), 100)
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

        if (this.shine === 1) {
            var rads = 180 * Math.PI * 2.0 / 360.0;
            ctx.translate(392, this.y + 96)
            ctx.rotate(rads)
            ctx.drawImage(
                this.arrowExplosionDim,
                0, 0, 64, 64,
                0, 0, 96, 96
            )
            ctx.setTransform(1, 0, 0, 1, 0, 0);

        }
        if (this.shine === 2) {
            // console.log('i am here')
            var rads = 180 * Math.PI * 2.0 / 360.0;
            ctx.translate(392, this.y + 96)
            ctx.rotate(rads)
            ctx.drawImage(
                this.arrowExplosionBright,
                0, 0, 64, 64,
                0, 0, 96, 96
            )
            ctx.setTransform(1, 0, 0, 1, 0, 0);

        }
    }
};


export class rightStaticArrow {
    constructor(y) {
        this.arrowSprite = new Image();
        this.arrowSprite.src = ArrowContainer;
        this.arrowExplosionDim = new Image();
        this.arrowExplosionDim.src = ArrowExplosionDim;
        this.arrowExplosionBright = new Image();
        this.arrowExplosionBright.src = ArrowExplosionBright;
        this.y = y
        this.shine = 0
    }

    makeItDark() {
        this.shine = 2
        setTimeout(this.makeItBoom.bind(this), 100)
    }
    makeItBoom() {
        this.shine = 0
    }

    makeItShine() {
        this.shine = 1
        setTimeout(this.makeItDark.bind(this), 100)
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


        if (this.shine === 1) {
            var rads = 270 * Math.PI * 2.0 / 360.0;
            ctx.translate(392, this.y + 96)
            ctx.rotate(rads)
          ctx.drawImage(this.arrowExplosionDim, 0, 0, 64, 64, 0, 0, 96, 96);
          ctx.setTransform(1, 0, 0, 1, 0, 0);
        }
        if (this.shine === 2) {
          // console.log('i am here')
            var rads = 270 * Math.PI * 2.0 / 360.0;
            ctx.translate(392, this.y + 96)
            ctx.rotate(rads)
          ctx.drawImage(this.arrowExplosionBright, 0, 0, 64, 64, 0, 0, 96, 96);
          ctx.setTransform(1, 0, 0, 1, 0, 0);
        }
    }
};