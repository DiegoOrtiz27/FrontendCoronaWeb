import React, { Component } from "react";
import axios from "axios";
import GetAvatar from "./components/GetAvatar";
import Profile from "./components/Profile";
import defaultImage from "./components/defaultImage";
import Head from "../../commons/Head/Head.jsx";
import Particles from "../../commons/particulas/Particles";
import Title from "../../commons/Title/Title.jsx";
import Input from "../../commons/Input/Input";
import user from "../../image/user.png";
import contraseña from "../../image/password.png";
import email from "../../image/email.png";
import Button from "../../commons/Button/Button";
import "./Definitivo.css"
class Profiledefinitivo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAvatarDefault: true,
      profile: {
        avatar: defaultImage,
      },
    };
    this.updateAvatar = this.updateAvatar.bind(this);
  }
  handleSubmit = async (e) =>{
    e.preventDefault();

    axios.delete('https://server-coronaweb.herokuapp.com/api/delete/31')
    .then(response=>{
      return response.data;
      
    })
  }
  handleSubmitChange= async (e) =>{
    e.preventDefault();

    axios.put('https://server-coronaweb.herokuapp.com/api/profile/31', this.state.form)
    .then(response=>{
      return response.data;
      
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
  updateAvatar(img) {
    const { profile } = this.state;
    this.setState((prevState) => {
      const newProfile = { ...profile, avatar: img };
      return {
        profile: newProfile,
        isAvatarDefault: false,
      };
    });
  }

  render() {
    const { profile, isAvatarDefault } = this.state;
    return (
      <section className="Fondo">
        <div className="canvas">
          <Particles />
        </div>
        <Head />
        <div className="main">
          <form className="formProfile">
            <Title title="PERFIL" />
            <div className="App">
              <GetAvatar
                avatar={profile.avatar}
                isAvatarDefault={isAvatarDefault}
                updateAvatar={this.updateAvatar}
              />
              <Profile avatar={profile.avatar} />
            </div>
            <div className="containerInput">
              <Input placeholder="Ingrese email" img={user} onChage={this.handleChange} type="email" name="correo"/>
              <Input placeholder="Nombre de usuario" img={email} onChage={this.handleChange} type="text" name="userName"/>
              <Input placeholder="Ingrese contraseña" img={contraseña} onChage={this.handleChange} type="password" name="contraseña"/>
            </div>
            <div className="buttons">
              <Button buttonText="Cambiar" onClick={this.handleSubmitChange} />
              <Button buttonText="Regresar" direccion="/MainPlay"/>
              <button className="btn btn-primary mb-2 active" onClick={this.handleSubmit}>Borrar</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Profiledefinitivo;
