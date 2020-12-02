import React from 'react'
import { Link } from 'react-router-dom'
import controlImage from '../../image/games.png'
import usuarioImage from '../../image/user.png'
import trofeoImage from '../../image/award.png'
import comentarioImage from '../../image/comentario.png'
import './Footer.css'

class Footer extends React.Component{
render(){
return(
  <div className={this.props.footer}>
    <Link to="/mainPlay">
          <img src={controlImage} alt={"Games"} />
        </Link>
        <Link to="/Comentario">
          <img src={comentarioImage} alt={this.props.alt} />
        </Link>
        <Link to="/Logros">
          <img src={usuarioImage} alt={this.props.alt} />
        </Link>
        <Link to="/Leaderboard">
          <img src={trofeoImage} alt={this.props.alt} />
        </Link>
   
    
  </div>
)
  }

}
export default Footer