import React, {Component} from 'react'
import FaceUp from './faceUp'
import FaceDown from './faceDown'
import cardData from './Manage.json'
export default class Card extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            image: props.image,
            value: props.value,
            matched: props.matched,
            selected: props.selected
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        if(cardData[1].selected.length < 2){
         this.setState(prevState=>{
              return{
                  selected : !prevState.selected
              }
          })
        if(this.state.selected === true){
            cardData.selected.push(this.state.value)
        }
        }

    }
    render(){
        return(            
                <div onClick={this.handleClick}>
                    {console.log("Card.js")}
                    {this.state.selected === true || this.state.matched === true ? <FaceUp image = {this.state.image}/> : <FaceDown image = {this.state.image}/>}
                </div>
            
        )
    }
}