const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const delay = 100;
const width = 600;
const height = 600;
canvas.width = width;
canvas.height = height;
let board;
let selectedSquare = undefined;
let pawn = new Pawn();

function start(){
	board = new Board();
	board.init();
	setColour(board);
	pawn.square = board.squares[1][2];
	update();
}


function setColour(board){
	let offset = 0;
	for(let i = 0; i < 8; i++){
			offset++;
			for(let j = 0; j < 8; j++){
				if((j + offset) % 2 == 0) board.squares[i][j].col = "#fff";
				else board.squares[i][j].col = "#000";
			}
		}
		if(offset = 1) offset--;	
}


function displayBoard(board){
	for(let i = 0; i < 8; i++){
			for(let j = 0; j < 8; j++){
				board.squares[i][j].draw(c);
			}
		}
}

function update(){
	c.fillStyle = "#FFE";
	c.fillRect(0,0,width,height);

	displayBoard(board);
	pawn.draw(c);
	if(selectedSquare != undefined) selectedSquare.selected = true;

	requestAnimationFrame(function(){
		setTimeout(function(){
			update();
		}, delay)}
	);
}	

canvas.addEventListener('click', event => {
			for(let i = 0; i < 8; i++){
					for(let j = 0; j < 8; j++){
						board.squares[i][j].selected = false;
					}
				}
			let xPosition = event.clientX;
    		let yPosition = event.clientY;
    		selectedSquare = board.squares[Math.floor(xPosition / (width / 8))][Math.floor(yPosition / (width / 8))];

    		console.log(event.clientX, event.clientY);
		}
)
start();