

/*
var player1Win = 0;
var player2Win = 0;
hands = ['rock', 'paper', 'scissors'];
function getHand(){
	if(parseInt ((Math.random()*10)%3) < .34 ){
		return hands[0];
	}else if (parseInt ((Math.random()*10)%3) < .67 ){
		return hands[1];
	} else{
		return hands[2];
	}
}
 console.log (getHand());
var player1 = {
	name: 'player1' ,
	getHand()
}
var player2 = {
	name: 'player2' ,
	getHand()
}
function playAround(player1, player2){
	if (player1.getHand() == player2.getHand()){
		console.log (player1.name + ": "+ player1.getHand()+ "\n" + player2.name + ": " + Player2.getHand() + "\n It's a tie!");
	}
	if (player1.getHand() == 'rock'){
		if (player2.getHand() == 'paper') {
			console.log (player1.name + "'s choice: "+ player1.getHand()+ "\n" + player2.name + "'s choice: " + player2.getHand() + "\n" + player2.name + " wins!");
		}else{
			console.log (player1.name + "'s choice: "+ player1.getHand()+ "\n" + player2.name + "'s choice: " + player2.getHand() + "\n" + player1.name + " wins!");
		}
	}
	if (player1.getHand() == 'paper'){
		if (player2.getHand() == 'scissors') {
			console.log (player1.name + ": "+ player1.getHand()+ "\n" + player2.name + ": " + player2.getHand() + "\n" + player2.name + " wins!");
		}else{
			console.log (player1.name + ": "+ player1.getHand()+ "\n" + player2.name + ": " + player2.getHand() + "\n" + player1.name + " wins!");
		}
	}
	if (player1.getHand() == 'scissors'){
		if (player2() == 'rock') {
			console.log (player1.name + ": "+ player1.getHand()+ "\n" + player2.name + ": " + player2.getHand() + "\n" + player2.name + " wins!");
		}else{
			console.log (player1.name + ": "+ player1.getHand()+ "\n" + player2.name + ": " + player2.getHand() + "\n" + player1.name + " wins!");
		}
	}
}
console.log(playAround(player1, player2));

*/

function thisExample(param1, param2) {
	return param1 + param2;
}

console.log(thisExample(1, 2));

