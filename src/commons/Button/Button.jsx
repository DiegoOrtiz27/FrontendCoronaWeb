import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'
class Button extends React.Component{
  render(){
    return(
    <div>
       <Link to={this.props.direccion}>
    <button onClick={this.props.onClick} className="btn button btn-primary mb-2 active " type={this.props.type}>{this.props.buttonText} </button>
              </Link>
   
    </div>    
    )
  }
}

export default Button