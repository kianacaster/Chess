class Piece
{
	constructor()
	{
		this.type;
		this.square;
	}

	draw(ctx)
	{
		console.log(this.type, this.square.x * (width / 8), this.square.y * (height / 8));
		// square.x * (width / 8)
		// square.y * (height / 8)
		ctx.font = "30px Comic Sans MS"
		ctx.fillStyle = "#00F"
		ctx.fillText(this.type, this.square.x * (width / 8), this.square.h * (height / 8))
	}
}