import React, {Component} from 'react'
import Card from './Card.js'

export default class CardRenderer extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        fetchCount : 0,
        usageList : props.list //List of Cards used to generate components. 
      }
    }
  
    render(){
      console.log(this.state.usageList)
      // const Cards = this.state.usageList.map(card =>{
      //   return(
      //     <Card 
      //       image = {card.image} 
      //       value = {card.value} 
      //       matched={card.matched} 
      //       selected={card.selected}/>
      //   )
      // })
      return(
        <div>
          {/* {this.state.usageList.forEach(card => {
              <Card 
                image = {card.image} 
                value = {card.value} 
                matched={card.matched} 
                selected={card.selected}/>
          })} */}
          {console.log("Card Renderer")}
        </div>
      )
    }
  }