import React from 'react';
import PropTypes from 'prop-types';
import QuestionCount from '../components/QuestionCount';
import Score from '../components/Score'

import './Result.css'
function Result(props) {
  return (
      <div>
        <div className="Main-header">
        <QuestionCount pregunta="Correctas" counter={props.questionId} total={props.questionTotal} />
        <Score racha={props.rachas} puntos={props.puntaje}/>
        </div>
        <h1 className={props.classNameTitle}>{props.titleResult}</h1>
        <div className="exp-container">
        <p className="exp">Experiencia {props.quizResult}</p>
      </div> 
      </div>
    
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired, 
  titleResult: PropTypes.string.isRequired,
  questionId: PropTypes.string.isRequired,
  questionTotal: PropTypes.string.isRequired,
  puntaje: PropTypes.number.isRequired,
  rachas: PropTypes.number.isRequired,
  exp: PropTypes.number.isRequired
};

export default Result;
