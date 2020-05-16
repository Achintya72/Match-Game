import React from 'react';


export default function FaceUp(props){
    return(
        <img 
        src={process.env.PUBLIC_URL + props.image} 
        alt="" 
        className="faceUp"
        />
    )
}