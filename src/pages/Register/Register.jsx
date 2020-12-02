import React from "react";
import axios from "axios";
import sha1 from "sha1"
import "../../commons/Styles/fondos.css";
import "./Register.css";
import user from "../../image/user.png";
import contraseña from "../../image/password.png";
import email from "../../image/email.png";
import Head from "../../commons/Head/Head";
import Title from "../../commons/Title/Title";
import Input from "../../commons/Input/Input";
import Button from "../../commons/Button/Button";
import Particles from "../../commons/particulas/Particles"
class Register extends React.Component {
  state = {
    form:{
      correo:'',
      userName:'',
      contraseña:''
    },
    register: false,
    isLoading: false,
    correoMal:false,
    contraseñaMal:false,
    userNameMal:false
  }
  


  handleChange = async (e) =>{
    e.persist();
    console.log(e.target.type!=="password")
    if(e.target.type!=="password"){await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]:e.target.value
      }
    })}else if(e.target.type==="password"){
      await this.setState({
        form:{
          ...this.state.form,
          [e.target.name]:sha1(e.target.value)
        }
      })
    }
    
    console.log(this.state.form)
  }
  // handleChange = async (e) =>{
  //   e.persist();

  //   await this.setState({
  //     form:{
  //       ...this.state.form,
  //       [e.target.name]:e.target.value
  //     }
  //   })
    
  //   console.log(this.state.form)
  // }
  handleSubmit = e => {
    console.log(this.state.form.correo)
    e.preventDefault();
    this.setState({ isLoading: true});
    if(this.state.form.correo==='' || this.state.form.correo.length>64){
    this.setState({ correoMal: true, isLoading: false});
    }
    if(this.state.form.userName==='' || this.state.form.userName.length<5){
      this.setState({ userNameMal: true, isLoading: false});
      }
    if(this.state.form.contraseña===''){
        this.setState({ contraseñaMal: true, isLoading: false});
    }
    if(this.state.form.correo!=='' && this.state.correoMal===true){
      this.setState({ correoMal: false, isLoading: false});
      }
      if(this.state.form.userName!=='' && this.state.userNameMal===true){
        this.setState({ userNameMal: false, isLoading: false});
        }
      if(this.state.form.contraseña==='' && this.state.contraseñaMal===true){
          this.setState({ contraseñaMal: false,isLoading: false});
      }
    if(this.state.contraseñaMal===false && this.state.form.contraseña!=='' && this.state.userNameMal===false && this.state.form.userName!=='' && this.state.correoMal===false && this.state.form.correo!==''){
      this.setState({isLoading: true})
    axios.post('https://server-coronaweb.herokuapp.com/api/register',this.state.form )
         .then(response => {
          console.log(response.da);
             if (response.data.status!==200) {
             
              this.setState({ isLoading: false, register:true});
              
             }
         })
        .catch(error => {
         this.setState({ isLoading: false});
            if (error.response) {
             /*
              * The request was made and the server responded with a
              * status code that falls out of the range of 2xx
              */
             console.log(error.response.data);
             console.log(error.response.status);
             console.log(error.response.headers);
         } else if (error.request) {
             /*
              * The request was made but no response was received, `error.request`
              * is an instance of XMLHttpRequest in the browser and an instance
              * of http.ClientRequest in Node.js
                */
            console.log(error.request);
         } else {
               // Something happened in setting up the request and triggered an Error
               console.log('Error', error.message);
           }
         
          });
    }
    
};

  
  isRegister = () => {
    if (this.state.register) {
      return <div className="container-register">
        <h1 className="registered">Se registró correctamente</h1>
        <Button buttonText="Continuar" direccion="/Mainplay" />
      </div>
    }
  }

  render() {
    
    return (
      <section className="Fondo">
        <div className="canvas">
          <Particles />
        </div>
        <Head />
        <div >
          <form className="form">
            <Title title="REGISTRARSE" />
            <div>
                {this.state.correoMal ? (
                <Input placeholder="El correo debe ser completado" img={user} type="email" name="correo" onChange={this.handleChange} required="required" className="input-error" />

              ) : (
                  
                  <Input placeholder="Ingrese email" img={user} type="email" name="correo" onChange={this.handleChange} required="required" className="input" />
                )}

                 {this.state.userNameMal ? (
               <Input placeholder="El nombre debe ser completado" type="text" name="userName" img={email} onChange={this.handleChange} required="required" className="input-error" />

              ) : (
                  
                <Input placeholder="Nombre de usuario" type="text" name="userName" img={email} onChange={this.handleChange} required="required" className="input" />
                )}

                 {this.state.contraseñaMal ? (
               <Input placeholder="La contraseña debe ser completada" img={contraseña} type="password" name="contraseña" onChange={this.handleChange} required="required" className="input-error" />

              ) : (
                  
                <Input placeholder="Ingrese contraseña" img={contraseña} type="password" name="contraseña" onChange={this.handleChange} required="required" className="input" />
                )}

            
              {this.isRegister()}
             
            </div>
            <div className={this.state.isLoading ? "container-loading" : "container-loading-false"} type="submit">
              {this.state.isLoading ? (
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              ) : (
                  <span></span>
                )}
            </div>

            <div className="buttons">
              <Button buttonText="Aceptar" onClick={this.handleSubmit} />
              <Button buttonText="Regresar" direccion="/" />
            </div>
          </form>
        </div>
      </section>
    );
  }
}
export default Register;
