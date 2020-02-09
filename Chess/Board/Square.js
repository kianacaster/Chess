class Square
{
	constructor(x, y, col)
	{
		this.x = x;
		this.y = y;
		this.w = width / 8;
		this.h = height / 8;
		this.col = col;
		this.piece;
		this.selected = false;
		this.selectedCol = "#f00";
	}

	draw(ctx)
	{
		let new_x = this.x * this.w;
		let new_y = this.y * this.h;
		if(this.selected == false) ctx.fillStyle = this.col;
		else ctx.fillStyle = this.selectedCol;
		ctx.fillRect(new_x, new_y, new_x + this.w, new_y + this.h);
	}
}