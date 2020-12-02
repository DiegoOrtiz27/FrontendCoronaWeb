import React from 'react'
import './logro.css'

function Logro (props){
  
    return(
      props.data.map((item,index)=>{
        return(
          <>
              
            <div  Key={`logro-${index}`} className={item.claseContenedor} >
           
       
            <div clasName="name-container">
            <p>{item.nameLogro}</p>
            </div>
            <div className="image-container">
               <img src={item.image} alt=""/>
            </div>
         
  
         </div>
          </>
        )
      })
    )
  }
  export default Logro