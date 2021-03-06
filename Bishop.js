class Bishop extends Piece
{
	constructor(){
		super("bishop");
	}

	getLegalMoves(board)
	{	
		this.legalMoves = [];
		//console.table(board.tiles);

		for (let i = 1; i <= 7; i++) { 
			let newX = this.tile.tileX + i; 
			let newY = this.tile.tileY + i; 
			if (newX < 8 && newY < 8) { 
				if(board.tiles[newY][newX].isAvailable){
					this.legalMoves.push(board.tiles[newY][newX]); 
				}else{
					if(!board.tiles[newY][newX].isAvailable && board.tiles[newY][newX].piece.colour !== this.colour){
						this.legalMoves.push(board.tiles[newY][newX]); 
						break;
					}else{
						break;
					}
				}

			}
		}
		for (let i = 1; i <= 7; i++) { 
			let newX = this.tile.tileX - i; 
			let newY = this.tile.tileY + i; 
			if (newX >= 0 && newY < 8) { 
				if(board.tiles[newY][newX].isAvailable){
					this.legalMoves.push(board.tiles[newY][newX]); 
				}else{
					if(!board.tiles[newY][newX].isAvailable && board.tiles[newY][newX].piece.colour !== this.colour){
						this.legalMoves.push(board.tiles[newY][newX]); 			
						break;		
					}else{
						break;
					}
				}
		
			}
		}
		for (let i = 1; i <= 7; i++) { 
			let newX = this.tile.tileX - i; 
			let newY = this.tile.tileY - i; 
			if (newX > 0 && newY >= 0) { 
				if(board.tiles[newY][newX].isAvailable){
					this.legalMoves.push(board.tiles[newY][newX]); 
				}else{
					if(!board.tiles[newY][newX].isAvailable && board.tiles[newY][newX].piece.colour !== this.colour){
						this.legalMoves.push(board.tiles[newY][newX]); 
						break;
					}else{
						break;
					}
				}
			}
		}
		for (let i = 1; i <= 7; i++) {  
			let newX = this.tile.tileX + i; 
			let newY = this.tile.tileY - i; 
			if (newX < 8 && newY >= 0) { 
				if(board.tiles[newY][newX].isAvailable){
					this.legalMoves.push(board.tiles[newY][newX]); 
				}else{
					if(!board.tiles[newY][newX].isAvailable && board.tiles[newY][newX].piece.colour !== this.colour){
						this.legalMoves.push(board.tiles[newY][newX]); 
						break;
					}else{
						break;
					}
				}
			}
		}   
	
		//console.table(board.tiles);
	} 
}
