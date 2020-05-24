import React, {Component} from 'react'
import FaceUp from './faceUp'
import FaceDown from './faceDown'

export default class Card extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.updateState(this)
    }

    render(){
        return(
            
                <div onClick={this.handleClick}>
                    {this.props.selected === true || this.props.matched === true ? <FaceUp image = {this.props.image}/> : <FaceDown image = {this.props.image}/>}
                </div>
            
        )
    }
}