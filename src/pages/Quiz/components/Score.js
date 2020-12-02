import React from 'react';
import PropTypes from 'prop-types';

import fire from '../../../image/fire.png'
import points from '../../../image/puntos.png'
import './Score.css'
function Score(props) {
  return (
    <div className="score-container">
        <figure className="racha-container">
            <img src={fire} alt="racha"/>
  <span className="racha">{props.racha}</span>
        </figure>
        <figure className="puntos-container">
            <img src={points} alt="puntos"/>
  <span className="puntos">{props.puntos}</span>
        </figure>
      
    </div>
  );
}

Score.propTypes = {
  racha: PropTypes.number.isRequired,
puntos: PropTypes.number.isRequired
};

export default Score;
