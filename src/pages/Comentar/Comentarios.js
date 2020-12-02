import React from "react";
import Head from "../../commons/Head/Head";
import Particles from "../../commons/particulas/Particles";
import Footer from '../../commons/Footer/Footer';
import "./Comentarios.css";
import Caja from "./components/Box";
import axios from 'axios';
class Comentarios extends React.Component {
    constructor(props){
        super(props);
        this.state={
          comentarios:[],
          form:{
              id_comentar:107
          }
        }
      }
    componentWillMount(){
        axios.get('https://server-coronaweb.herokuapp.com/api/comentario/')
        .then((response) => {
             const comentarios=response.data
             this.setState({comentarios})
             console.log(comentarios)
           })
        
      }
      handleSubmit = async (e) =>{
        e.preventDefault();
    
        axios.post('https://server-coronaweb.herokuapp.com/api/comentario/', this.state.form)
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
    render() {
        return (
            <section className="Fondo">
                <div className="canvas">
                    <Particles />
                </div>
                <Head />
                <div className="main-comentarios">
                <input className="input-comentar" placeholder="Escribe algo..."  type="text" name="respuesta" onChange={this.handleChange}>
                </input>
                <button onClick={this.handleSubmit} className="btn-primary mb-2 active">Enviar</button>
                <Caja data={this.state.comentarios}/>
                </div>
                <Footer footer="footerLogros" />
            </section>

        );
    }
}
export default Comentarios;