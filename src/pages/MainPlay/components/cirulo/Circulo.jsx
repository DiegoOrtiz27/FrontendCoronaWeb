import React from 'react'
import './Circulo.css'
import {Link} from 'react-router-dom'

function Circulo (props){
  
  return(
    props.data.map((item,index)=>{
      return(
        <>
            <Link to={item.direccion}>
          <button Key={`circulo-${index}`} className={item.claseContenedor} >
         
     
          <div clasName="name-container">
          <p>{item.nameLevel}</p>
          </div>
          <div className="image-container">
             <img src={item.image} alt=""/>
          </div>
       

       </button>
       </Link>
        </>
      )
    })
  )
}
export default Circulo