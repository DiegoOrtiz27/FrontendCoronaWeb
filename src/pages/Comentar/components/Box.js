import React from 'react'
import imgLike from '../../../image/like.png'
import imgLikeColor from '../../../image/like (1).png'
import imgLike1 from '../../../image/dislike.png'
import './Box.css'
class Box extends React.Component{
    state={
        cambiarImg:false
    }
    handleSubmit = () =>{
        this.setState({
            cambiarImg:true
        })
    }
    render(){
        return(
            this.props.data.map((item,index)=>{
              return(
                <>
                  <div Key={`box-${index}`} className={"box-container"} >
                          
              <h1 className="h1-comentarios">{item.nombre}</h1>
              <p className="p-comentarios">{item.respuesta}</p>
              <div className={"reacciones"}>
              <button onClick={this.handleSubmit}>
                  <img src={this.state.cambiarImg ? imgLikeColor:imgLike} alt={"like"} />
              <p className="p-comentarios">{item.likes}</p>
                </button>
                <button >
                  <img src={imgLike1} alt={"like"} />
              <p className="p-comentarios">{item.dislikes}</p>
                </button>
                  </div>
               
        
               </div>
                </>
              )
            })
          )
    }
  
}
export default Box