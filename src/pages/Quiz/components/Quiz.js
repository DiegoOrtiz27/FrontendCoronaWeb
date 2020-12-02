import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';
import Score from '../components/Score'

import Pausa from '../../../image/detener.png'
import './Quiz.css'

function Quiz(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return (
    
      <div key={props.questionId}>
        <div className="Main-header">
        
       <QuestionCount pregunta="Pregunta" counter={props.questionId} total={props.questionTotal} />
       
       <Link to="">
       <img className="Pausa" src={Pausa} alt="Pause"/>
       </Link>
       <Score racha={props.rachas} puntos={props.puntaje}/>
        </div>
      
        <Question content={props.question} />
        <ul className="answerOptions">
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
      </div>
    
  );
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  puntaje: PropTypes.number.isRequired,
  rachas: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};

export default Quiz;
