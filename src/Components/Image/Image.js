import React from 'react';



const  Image = (props) => {
    return (
        <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img style={{width: '400px', height: 'auto'}} alt="" src={props.image}/>
            <div>
                <p>Image By: {props.name}</p>
                <p>Image Description: {props.description}</p>
                <p>Image Credits: {props.credits}</p>
                <a href={props.image} download><button className="br4 f6 link dim ph3 pv2 mb2 dib white bg-purple" >Download</button></a>
                
            </div>
        </div>

    )
}

export default Image;