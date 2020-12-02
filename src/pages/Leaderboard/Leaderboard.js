import React, { useState, useEffect, Component } from "react";
import ReactDOM from "react-dom";
import Particles from "../../commons/particulas/Particles"
import "./styles.css";
import List from "./List";
import Head from '../../commons/Head/Head'
import Footer from '../../commons/Footer/Footer'
import axios from 'axios'
class Leaderboard extends React.Component  {
  constructor(props){
    super(props);
    this.state={
      jugadores:[]
    }
  }
  componentWillMount(){
    axios.get('https://server-coronaweb.herokuapp.com/api/ranking')
    .then((response) => {
         const jugadores=response.data[1]
         this.setState({jugadores})
         console.log(jugadores)
       })
    
  }
  render(){
    return (
      
      <div>
        <div className="canvas">
          <Particles />
        </div>
        <Head/>
        <List data={this.state.jugadores}/>
        <Footer footer="footerRanking"/>
      </div>
    );
  }
  
}

export default Leaderboard