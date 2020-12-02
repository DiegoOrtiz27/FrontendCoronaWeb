import React from "react";
import Head from "../../commons/Head/Head";
import Particles from "../../commons/particulas/Particles"
import Footer from '../../commons/Footer/Footer'
import "../profile/Logros/logro.css"
import { Link } from 'react-router-dom';
import dataLogros from "../profile/components/JSON/dataLogros"
import Logro from "../profile/Logros/Logro"
import configuracion from "../../image/config.png"
class Logros extends React.Component {
    render() {
        return (
            <section className="Fondo">
                <div className="canvas">
                    <Particles />
                </div>
                <Head />
                <div className="main">
                    <form className="formLogro">
                        <Link to="/Profile">
                            <img src={configuracion} alt={"Configuracion"} className="config" />
                        </Link>
                        <h1>LOGROS</h1>
                        <div className="containerInput">
                            {/* <p>Samuel Diosa López</p>
                            <p>samuel@gmail.com</p> */}
                        </div>
                        <div className="niveles">
                            <h2>COVID</h2>
                            <h2>ESTADISTICAS</h2>
                            <h2>PREVENCION</h2>
                            <h2>SINTOMAS</h2>
                        </div>
                        <Logro data={dataLogros} />
                    </form>
                </div>
                <Footer footer="footerLogros" />
            </section>

        );
    }
}
export default Logros;