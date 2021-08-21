
import React from 'react';
import Image from '../Image/Image';

class ImageSuper extends React.Component {

    render() {
        const { data } = this.props
        return (
            <div>
                <h1 style={{letterSpacing: '3px', fontSize: '50px'}} className="tc">Gallery</h1>
                {
                    data.map((item, index) => {
                        return <Image name={item.name} image={item.image} credits={item.credits} description={item.description}/>
                    })
                }
            </div>
        );
    }
}

export default ImageSuper