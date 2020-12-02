import React, { Component } from 'react';
import axios from 'axios';
import Quiz from './components/Quiz';
import Result from './components/Result';
import {Link, Redirect} from 'react-router-dom'
import Cerrar from '../../image/cerrar.jpg'
import Button from "../../commons/Button/Button";
import './QuizFinal.css'
import Logros from '../profile/Logros/Logro'
import dataLogro from "./api/dataLogros"
import dataLogro1 from "./api/dataLogros1"
import dataLogro1Mal from "./api/dataLogro1Mal"
import quizQuestions from './api/quizQuestions';
// import quizQuestions2 from './api/quizQuestions2';
// import quizQuestions3 from './api/quizQuestions3';
// import quizQuestions4 from './api/quizQuestions4';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answer:'',
      answerOptions: [],
      answersCount: {},
      result: '',
      type:'',
      puntos:0,
      seguidas:0,
      exp:0,
      right:'',
      resultado:false,
      tituloResultado:"",
      apareceLogro:false,
      noAparece:false,
      jugador:[],
      guardarAvance:false
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {

    const shuffledAnswerOptions = quizQuestions.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({

      answerOptions: shuffledAnswerOptions[0]
    });
  }
  
  
  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(), 300);
    }
  }

  setUserAnswer(answer) {
    let puntos=this.state.puntos;
    let correcto;
    let experiencia=this.state.exp
    let racha=this.state.seguidas;
    if(answer===this.state.right){
      puntos=this.state.puntos+600;
      correcto=true;
      racha=this.state.seguidas+1;
      experiencia=this.state.exp+1
    }else{
      correcto=false;
      racha=0;
    }
    if(racha>1 && correcto===true){
      puntos=puntos+(100*racha)
    }

    this.setState((state, props) => ({
      answersCount: {
        //Operator rest (Convertir lista en array)
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer,
      puntos:puntos,
      seguidas:racha,
      exp:experiencia
    }));
    
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    
   
   
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: '',
      right:quizQuestions[counter].right,
     
    });
  }

  

  setResults() {
    let expTotal=this.state.exp*this.state.puntos;
    
    this.setState({ result:expTotal, resultado:true, jugador:{experiencia:expTotal, puntaje:this.state.puntos}});
    if(expTotal>=48300){
      this.setState({tituloResultado:"Has desbloqueado dos nuevos logros", apareceLogro:false, classNameTitulo:"tituloCorrecto", noAparece:true})
    }else if(expTotal>=(48300/2) && expTotal<48300){
      this.setState({tituloResultado:"Has desbloqueado un nuevo logro",apareceLogro:true,classNameTitulo:"tituloCorrecto", noAparece:true})
    }else if(expTotal<(48300/2)){
      this.setState({tituloResultado:"Sigue intentando", classNameTitulo:"tituloIncorrecto"})
    }
    
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
        puntaje={this.state.puntos}
        rachas={this.state.seguidas}
      />
    );
  }

  renderResult() {
    return <div>
      <Result quizResult={this.state.result} questionId={this.state.exp} questionTotal={quizQuestions.length} rachas={this.state.exp} puntaje={this.state.puntos} titleResult={this.state.tituloResultado} classNameTitle={this.state.classNameTitulo}/>
      <div className="logro-container">
        {this.state.noAparece ? (
          <Logros data={this.state.apareceLogro ? dataLogro:dataLogro1}/>
        ):(
          <Logros data={dataLogro1Mal}/>
        )}
      </div>
    <Button buttonText="Continuar" onClick={this.handleSumit} direccion="/mainPlay/" />
      </div>
  }

  handleSumit = () =>{
    this.setState({
      experiencia:this.state.result,
      puntaje:this.state.puntaje
    })
    axios.put('https://server-coronaweb.herokuapp.com/api/quiz/31',this.state.jugador)
    .then((response) => {
         console.log(response.data)
         this.setState({guardarAvance:true})
       })
  }
 
  render() {
    return (
      <div className="Quiz-fondo">
        <div className="Quiz-header">
          <Link to="/mainPlay">
          <img src={Cerrar} className="Equis" alt="Equis" />
          </Link>
        </div>
        <div className="Fondo-atras">
            <div className="Fondo-adelante">
                <div >
                {this.state.resultado ? this.renderResult() : this.renderQuiz()}
                </div>
            </div>
        </div>
       {this.updateChange}
      </div>
    );
  }
}

export default App;