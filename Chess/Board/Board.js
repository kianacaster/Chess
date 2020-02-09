class Board
{
	constructor()
	{
		this.squares = [];
	}
	
	init()
	{
		for(let i = 0; i < 8; i++){
			for(let j = 0; j <= 8; j++){
				this.squares[i] = new Array(j);
			}
		}
		for(let i = 0; i < 8; i++){
			for(let j = 0; j < 8; j++){
				this.squares[i][j] = new Square(i, j, undefined);
			}
		}
	}
}