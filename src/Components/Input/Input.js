
import React from 'react';
import './Input.css';

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            imageUrl: ''
        }
        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeImageUrl = this.onChangeImageUrl.bind(this)
        this.onButtonClick = this.onButtonClick.bind(this)
    }

    onChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    onChangeImageUrl = (event) => {
        this.setState({
            imageUrl: event.target.value
        })
    }

    onButtonClick = () => {
        if (this.state.imageUrl.length === 0 &&  this.state.name.length === 0) {
            alert('Enter all arguments!')
        }  else {
            fetch('http://tranquil-lowlands-55499.herokuapp.com/image', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                image: this.state.imageUrl
                })
            });
        }
        
    }

    render() {
        return (
            <div>
                <h1 className="imgg tc">Image Gallery</h1>
                <div className="custom-border mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
                    <h1 style={{textAlign: 'center'}}>Fill The Form</h1>
                    <label htmlFor="name" className="">Name</label><br/>
                    <input className="custom-input" onChange={this.onChangeName} name="name" type="text"/><br/><br/>

                    <label htmlFor="imageurl" className="">Image Url</label><br/>
                    <input className="custom-input" onChange={this.onChangeImageUrl} name="imageurl"  type="text"/><br/><br/><br/>

                    <button className="f6 link dim ph3 pv2 mb2 dib white bg-light-purple" onClick={this.onButtonClick}>Submit</button>
                    
                </div>
            </div>
        );
    }
    
}

export default Input;