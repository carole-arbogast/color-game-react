import React from "react";
import Header from "./Header";
import Controls from "./Controls"; 
import Squares from "./Squares"; 


const ranNum = () => {
	return Math.floor(Math.random() * 255); 
}

const makeSquare = () => {
	return {
		color: `rgb(${ranNum()}, ${ranNum()}, ${ranNum()})`,
		squareClassName: "square"
	}
}

export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.createNewGameState(false); 
	  }

	makeSquares = (num) => {
		const arr = []; 
		for (let i = 0; i < num; i++){
			arr.push(makeSquare()); 
		}
		return arr; 
	}

	createNewGameState = (isEasy) => {
		let num;
		isEasy ? num = 3 : num = 6; 
		const squares = this.makeSquares(num);
		return {
			easy: isEasy, 
			squares: squares,
			rightSquareIndex: Math.floor(Math.random() * squares.length), 
			gameWon: false,
			infoText: ""
		}
	}
	handlePlayAgainClick = () => {
		this.setState(this.createNewGameState(false)); 
	}

	handleChangeDifficulty = (isEasy) => {
		if(isEasy){
			this.setState(this.createNewGameState(isEasy));
		}
		else {
			this.setState(this.createNewGameState(isEasy));
		}
	}

	handleClickSquare = (index) => {
		if(this.state.gameWon === false){
			if(index === this.state.rightSquareIndex){
				const newSquares = this.state.squares.map( (v, i) => {
					return {
						color: this.state.squares[this.state.rightSquareIndex].color,
						squareClassName : "square won"
					}
				})
				this.setState({
					squares: newSquares,
					gameWon: true,
					infoText: "You won!"
				})
			}
			else {
				const newSquares = this.state.squares.slice(); 
				newSquares[index] = {
					color: newSquares[index].color,
					squareClassName: "square hidden"
				}; 
				this.setState({
					squares: newSquares, 
					infoText: "Try again!"
				})
			}
		}
	}
	render() {
		const {easy, squares, rightSquareIndex, infoText} = this.state; 
		const rightSquare = squares[rightSquareIndex];
		return (
			<div>
				<Header color={rightSquare.color}/>

				<Controls infoText={infoText} isEasy={easy} onChangeDifficulty={this.handleChangeDifficulty} onPlayAgainClick={this.handlePlayAgainClick}/>

				<Squares onClickSquare={this.handleClickSquare} squares={squares} />

			</div>
		)
	}
}

export default App;