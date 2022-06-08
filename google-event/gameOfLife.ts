class grid{

	width:number;
	heigth:number;
	cells:boolean[][];
	ngrid:number[][];

	constructor(width:number, heigth:number){

			this.width=width;
			this.heigth=heigth;

			this.cells = [];
			this.ngrid=[];

			for(let i=0; i<heigth; i++){
					this.cells[i]=[];
					this.ngrid[i]=[];
					 for(let j=0; j<width; j++){

							 this.cells[i][j]=false;
							 this.ngrid[i][j]=0;
					}
			}
	}

	public setAlive(y:number, x:number){

			this.cells[y][x]=true;
		 
		 for(let i=y-1; i<=y+1; i++){

				 for(let j=x-1; j<=x+1; j++){

						 if(i==j && x==y) continue;

						 this.ngrid[i][j]+=1;
				 }
		 }

	}

	public countLivingNeighbours(y:number, x:number){

			return this.ngrid[y][x];

	}

	public printGrids(){

			let s="";
			for(let i=0; i<this.heigth; i++){
					s += "\n";
					 for(let j=0; j<this.width; j++){
							 if(this.isAlive(i,j)){
											s+="1";
							 }else{
									 s+="0"
							 }
					}
					
			}
			console.log(s);
			
	}

	public printNGrids(){

			let s="";
			for(let i=0; i<this.heigth; i++){
					s += "\n";
					 for(let j=0; j<this.width; j++){
							 if(this.ngrid[i][j]){
											s+="1";
							 }else{
									 s+="0"
							 }
					}
					
			}
			console.log(s);
			
	}

	public isAlive(y:number, x:number){

			return this.cells[y][x];

	}

}



function testCreateGrid() {
	var g = new grid(10, 2);
	// console.log(g)
}

function testSetAlive() {
	var g= new grid(3, 3);
	g.setAlive(1, 2);
	// console.log(g);
}

function testCountNeighbours() {
	var g= new grid(5, 5);
	g.setAlive(2, 2);
	g.printGrids();
	g.printNGrids();
	var m = g.countLivingNeighbours(1, 1);
	if (m != 1) {
			console.log("testCountNeighbours: expected 1 neighbour, got " + m);
	}
}

testCreateGrid();
testSetAlive();
testCountNeighbours();