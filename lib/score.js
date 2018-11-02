export default class score {
    constructor(){
        this.score = 0
    }

    draw(ctx) {
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(`Score: ${this.score}`, 800, 100)
    }
}