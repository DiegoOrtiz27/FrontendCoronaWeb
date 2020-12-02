import React, { Component } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';
import {Link} from 'react-router-dom'
import Cerrar from '../../image/cerrar.jpg'
import './QuizFinal.css'

import quizQuestions from './api/quizQuestions2';
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
      right:''
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
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    let puntos=this.state.puntos;
    let correcto;
    let racha=this.state.seguidas;
    if(answer===this.state.right){
      puntos=this.state.puntos+600;
      correcto=true;
      racha=this.state.seguidas+1;
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
      seguidas:racha
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

  getResults() {
    
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
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
    return <Result quizResult={this.state.result} />;
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
                {this.state.result ? this.renderResult() : this.renderQuiz()}
                </div>
            </div>
        </div>
       
      </div>
    );
  }
}

export default App;