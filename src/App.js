import React, {Component} from 'react';
import './App.css';
import Card from './Card' 
import cardData from './Manage.json'
import CardRenderer from './CardRender'

let shuffledList = []
let cardList = []
let index = 0;
let buttonCount = 0;
export default function App(){
  function Shuffler(){
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
  return(
    <div>
      <button id="Start" onClick={Shuffler}>Start Game</button>
      {buttonCount >= 1 ? <CardRenderer list = {shuffledList}/> : <h1>Click Button to Start</h1>}
    </div>
  )
}
