export default class rating {
    constructor() {
        this.rating = ""
    }

    clear() {
        this.rating = ""
        // debugger
    }

    draw(ctx) {
        // if (this.rating !== "") {
        //     // setTimeout(this.clear.bind(this), 1000)
        //     this.clear.bind(this)
        // }
        ctx.font = "700 50px Arial";
        ctx.fillStyle = "#e8e810";
        ctx.fillText(`${this.rating}`, 800, 400)
    }
}