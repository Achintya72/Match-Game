import React, { Component } from 'react';
import './App.css';
import Card from './Card'
import cardData from './Manage.json'

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
      selectedCard : null
    }
    this.fetchCards = this.fetchCards.bind(this)
  }
  componentDidMount() {
    fetch("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then(fresponse => fresponse.json())
      .then(data => {
        this.setState({
          deckId: data.deck_id
        })
      })
  }
  fetchCards() {
    /*if (this.state.fetchCount < 1) {
      fetch("https://deckofcardsapi.com/api/deck/" + this.state.deckId + "/draw/?count=52")
        .then(response => response.json())
        .then(data => {
          this.setState({
            cards: data.cards,
            fetchCount: 1
          })
        })
    }
    else {
      alert("Game Started")
    } */
    if (this.state.fetchCount < 1) {
        this.Shuffler()
        this.setState({
          cards : shuffledList,
          fetchCount : this.state.fetchCount++
        })
    }
  }

  Shuffler(){
    if(buttonCount < 1){
      cardData[0].map(card =>{
        cardList.push(card)
      })
      for(var i = 0; i < 52; i++){
          index = Math.floor((Math.random() * cardList.length))
          shuffledList.push(cardList[index])
          cardList.splice(index, 1) 
        }
      buttonCount++;

    }
    else{
      alert("Game Started")
    }
  }

  ChangedCardState = (card) =>
  {
      if(this.state.selectedCard !== null)
      {
          if(this.state.selectedCard.value !== card.value)
          { 
            this.setState({
              selectedCard: null
            })    
          }
      }     
      else if(this.state.selectedCard == null)
      {
        this.setState({
          selectedCard: card
        })
      }
      else{
        this.state.selectedCard.setState({
          selected : false
        })
        this.setState({          
          selectedCard : null
        })
        
        card.setState({
          selected : false
        })
      }
  }


  render() {
    const renderProps = this.state.cards.map(card => {
      return (
        <Card
          image={card.image}
          value={card.value}
          updateState = {this.ChangedCardState}
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