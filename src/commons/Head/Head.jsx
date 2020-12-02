import React from 'react'
import logo from '../../image/logofinal.png'
import './Head.css'
class Head extends React.Component{
    render(){
        return(
           <div className="header ">
              
              <div className="contenedor-logo">
              <img src={logo} alt="logo"/>
              </div>
              <div >
              <h1>CORONA WEB</h1>
              </div>
              
           </div> 
        )
    }
}
export default Head