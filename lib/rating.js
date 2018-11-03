export default class rating {
    constructor() {
        this.rating = ""
    }

    clear() {
        this.rating = ""
        // debugger
    }

    draw(ctx) {
        if (this.rating !== "") {
            setTimeout(this.clear.bind(this), 200)
        }
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(`${this.rating}`, 800, 400)
    }
}