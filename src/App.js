import React, {Component} from 'react';
import './App.css';
import Card from './Card'
export default class App extends React.Component{
    constructor(){
      super()
      this.state = {
        deckId: null,
        cards: [],
        fetchCount: 0
      }
      this.fetchCards = this.fetchCards.bind(this)
    }
    componentDidMount(){
      fetch("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then(fresponse => fresponse.json())
      .then(data => {
        this.setState({
          deckId : data.deck_id
        })
      })     
    }
    fetchCards(){
      if(this.state.fetchCount < 1){
        fetch("https://deckofcardsapi.com/api/deck/" + this.state.deckId +"/draw/?count=52")
        .then(response => response.json())
        .then(data => {
          this.setState({
            cards: data.cards,
            fetchCount: 1 
          })
        })
    }
    else{
      alert("Game Started")
    }
  }
    render(){
      const renderProps = this.state.cards.map(card =>{
        return(
        <Card 
          image={card.image}
          value = {card.value}
        />
        )
      })
      return(
        <div>
          <button id="Start" onClick={this.fetchCards}>Start Game</button>
          <div className="cards">{renderProps}</div>

        </div>
      )
    }
}