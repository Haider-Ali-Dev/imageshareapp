import React from 'react';



const  Image = (props) => {
    return (
        <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img style={{width: '400px', height: 'auto'}} alt="" src={props.image}/>
            <div>
                <p>Image By: {props.name}</p>
                <p>Image Description: {props.description}</p>
                <p>Image Credits: {props.credits}</p>
            </div>
        </div>

    )
}

export default Image;