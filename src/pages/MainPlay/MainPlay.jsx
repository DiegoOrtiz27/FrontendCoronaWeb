import React from "react";
import Head from "../../commons/Head/Head";
import dataCirculo from "./components/JSON/dataCirculo"
import Circulo from "./components/cirulo/Circulo"
import Particles from "../../commons/particulas/Particles"
import Footer from  '../../commons/Footer/Footer'
// import "./MainPlay.css"
import "../../commons/Styles/fondos.css"

//hola mundo
class MainPlay extends React.Component {
  

    


  render() {
    
    return (
      
      <section className="Fondo">
         <div className="canvas">
        <Particles />
      </div>
        <Head />

        <main>
          <Circulo
          data={dataCirculo}
          />
        </main>
        <Footer footer="footer"/>
      </section>
    );
  }
}
export default MainPlay;
