var cards = [
	{
		rank: "queen",
		suit: "hearts",
		image: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		image: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		image: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		image: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0]===cardsInPlay[1]){
			alert("You found a match!");
		}
		else {alert("Sorry. Try again.")}

	}
}

var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	console.log("User flipped "+cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].image);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].image)
	checkForMatch();
}

var createBoard = function(){
	for (var i=0; i<cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png')
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener("click",flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

var resetGame = function(){
	for (var i=0; i<cards.length; i++){
		newCard = document.getElementsByTagName('img')[i];
		newCard.setAttribute('src','images/back.png');
		cardsInPlay.length = 0;
	}
}

createBoard();
document.getElementsByTagName('button')[0].addEventListener('click',resetGame);