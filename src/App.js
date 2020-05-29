import React, { Component } from 'react';
import './App.css';
import Card from './Card'
import cardData from './Manage.json'


// Hello respond with comment if you see me, 
// Abhi: yes I can see it
let shuffledList = []
let cardList = []
let index = 0;
let buttonCount = 0;
let cardsNotMatched;
let openCards = [];
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      deckId: null,
      cards: [],
      fetchCount: 0,
      selectedCards: []
    }
    this.fetchCards = this.fetchCards.bind(this);
    this.checkCards = this.checkCards.bind(this);
  }
  fetchCards() {
    if (this.state.fetchCount < 1) {
      var newCount  = this.state.fetchCount + 1;
      this.Shuffler()
      this.setState({
        cards: shuffledList,
        fetchCount: newCount
      })
    }
  }

  Shuffler() {
    if (buttonCount < 1) {
      cardData[0].map(card => {
        cardList.push(card)
      })
      for (var i = 0; i < 52; i++) {
        index = Math.floor((Math.random() * cardList.length))
        cardList[index].index = i
        shuffledList.push(cardList[index])
        cardList.splice(index, 1)
      }
      buttonCount++;

    }
    else {
      alert("Game Started")
    }
  }
  
  ChangedCardState = (card) => {
    if(openCards.length < 2){
    var newState = !card.props.selected;
    var cardIndex = card.props.index;

    var list = this.state.cards.map((c, j) =>{
      if(j === cardIndex){
         c.selected = newState;
      }
      return c;
    });

    var prevSelectedCards = list.filter(c =>c.selected === true && c.matched !== true);
     if(prevSelectedCards && prevSelectedCards.length === 2)
     {
       
       if(prevSelectedCards[0].value === prevSelectedCards[1].value)
       {
        list = list.map((c) =>{
          if(c.selected === true){
             c.matched = true;            
          }
           return c;
        });
       }
       else{
         cardsNotMatched = true;
         openCards.push(prevSelectedCards[0]);
         openCards.push(prevSelectedCards[1]);
       }
     }

  
    this.setState({
      cards:  list      
    })    
    return;
  }
}
  checkCards(){
    if(cardsNotMatched){
      let list = this.state.cards;
      list.map(card =>{
        if(card.selected === true && card.matched !== true){
          card.selected = false;
        }
      })
      cardsNotMatched = false;
      openCards = [];
      this.setState({
        cards: list
      });
    }
  }

  render() {
    setTimeout(this.checkCards, 3000);
    const renderProps = this.state.cards.map(card => {
      return (
        <Card
          image={card.image}
          value={card.value}
          index={card.index}
          selected={card.selected}
          matched={card.matched}
          updateState={this.ChangedCardState}
          key={card.Index}
        />
      )
    })
    return (
      <div className="gameBoard">
        <button id="Start" onClick={this.fetchCards}>Start Game</button>
        <div className="cards">{renderProps}</div>
      </div>
    )
  }
}