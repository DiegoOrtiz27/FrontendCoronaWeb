import React from 'react'
import './Input.css'
class Input extends React.Component{
    render(){
        return (
            
                <div className="input-container">
                <img src={this.props.img} alt=""/>
                <input className={this.props.className} type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} onChange={this.props.onChange} value={this.props.value} required={this.props.required} />
                </div>
        )
    }
}

export default Input
