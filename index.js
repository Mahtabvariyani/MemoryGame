class MemoryGame {
  constructor(cards) {
    this.cards = cards,
    // add the rest of the class properties here
    this.pickedCards=pickedCards,
    this.pairsClicked=pairsClicked,
    this.pairsGuessed=pairsGuessed;

  }

  shuffleCards() {
    // ... write your code here
    for(let i=this.cards.length;i>0;i--){
      let random=Math.floor(Math.random()*this.cards.length);
      return random
    }
  
  }

  checkIfPair(card1, card2) {
    // ... write your code here
if(card1!==card2){
pairsClicked++
return false 
}else if(card1===card2){
  pairsGuessed++
  return true

}

  }

  checkIfFinished() {
    // ... write your code here
  if(pairsGuessed=5){
    return 'You Won!!!'
  }else{
    return 'You Lost!!!!!'
  }
  
  }
}
