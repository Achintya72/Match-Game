import React, {Component} from 'react'
import FaceUp from './faceUp'
import FaceDown from './faceDown'

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            image: props.image,
            value: props.value,
            matched: true,
            selected: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(prevState=>{
            return{
                selected : !prevState.selected
            }
        })
    }
    render(){
        return(
            <div onClick={this.handleClick}>
                {this.state.selected === true || this.state.matched === true ? <FaceUp image = {this.state.image}/> : <FaceDown/>}
            </div>
        )
    }
}