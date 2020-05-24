import React, { Component } from 'react';
import './App.css';
import Card from './Card'
import cardData from './Manage.json'
import { wait } from '@testing-library/react';

// Hello respond with comment if you see me, 
// Abhi: yes I can see it
let shuffledList = []
let cardList = []
let index = 0;
let buttonCount = 0;

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      deckId: null,
      cards: [],
      fetchCount: 0,
      selectedCards: []
    }
    this.fetchCards = this.fetchCards.bind(this)
  }
  fetchCards() {
    if (this.state.fetchCount < 1) {
      this.Shuffler()
      this.setState({
        cards: shuffledList,
        fetchCount: this.state.fetchCount++
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
    var newState = !card.props.selected;
    var cardIndex = card.props.index;
    var sCards = this.state.selectedCards;
    if(newState === true)
    {
      sCards.push(cardIndex);
    }
    const list = this.state.cards.map((c, j) =>{
      if(j === cardIndex){
         c.selected = newState;
      }
      return c;
    });
  
    this.setState({
      cards:  list,
      selectedCards: sCards
    })    
    return;
  }

  render() {
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