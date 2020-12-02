import React from "react";
import axios from "axios";
import Input from "../../commons/Input/Input.jsx";
import Button from "../../commons/Button/Button.jsx";
import Head from "../../commons/Head/Head.jsx";
import Title from "../../commons/Title/Title.jsx";
import user from "../../image/user.png";

import contraseña from "../../image/password.png";
import "../../commons/Styles/fondos.css";
import "./login.css";
import Particles from "../../commons/particulas/Particles";
import { Link, Redirect} from "react-router-dom";


class Login extends React.Component {
 state={
   redirect:false,
   isLoading:false
 }
  handleSubmit = async (e) =>{
    e.preventDefault();
    this.setState({isLoading: true});

    axios.post('https://server-coronaweb.herokuapp.com/api/', this.state.form)
    .then(response=>{
      return response.data;
      
    })
    .then(response=>{
      if(response.length>0){
          this.setState({redirect: true, isLoading: false});
      }
    })
  }

  handleChange = async (e) =>{
    e.persist();
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]:e.target.value
      }
    })
    console.log(this.state.form)
  }

  renderRedirect = () => {
    if (this.state.redirect) {
        return <Redirect to='/MainPlay'/>
    }
};


  render(){
    return (
    <section className="Fondo">
      <div className="canvas">
        <Particles />
      </div>
      <Head />
      <div className="main">
        <form className="form" >
          <Title title="INICIAR SESIÓN" />
          <div>
          <Input placeholder="Ingrese email" img={user} type="email" name="correo" className="input" onChange={this.handleChange}/>
          <Input placeholder="Ingrese contraseña" img={contraseña} type="password" className="input" name="contraseña" onChange={this.handleChange}/>
          </div>
          <div className="buttons">
           
            <Button buttonText="Iniciar" onClick={this.handleSubmit} />
            <Button buttonText="Reistrarse" direccion="/Register" />
            <Link to="">¿Has olvidado tu contraseña?</Link>
          </div>
        </form>
      </div>
      {this.renderRedirect()}
    </section>
  );}
  
}

export default Login;
