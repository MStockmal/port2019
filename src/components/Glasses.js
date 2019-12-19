import React from 'react';
import '../glasses.css';
import arch from '../SVG/arch.svg'
import hair from '../SVG/Smile.svg'
import smile from '../SVG/Hair.svg'

const Glasses = () => {
  return (
    <div className="center-align">
        <div className="section"></div>
        {/* <div className="row center">
          <div className="col s1 offset-m2"></div>
          <div className="col s4 m2 l2 glass"></div>
          <div className="col s1 nose valign-wrapper"></div>
          <div className="col s4 m2 l2 glass"></div>
          <div className="col s2"></div>
        </div> */}
        <div className="row center">
          <div className="col s12"><img src={hair} className="hair" alt=""/></div>
          <div className="col s4 offset-s2 glass"></div>
          <div className="col s1 nose"><img className="arch" src={arch} alt=""/></div>
          <div className="col s4 of glass"></div>
          <div className="col s12"><img src={smile} className="smile" alt=""/></div>
        </div>
    </div>

  )

};

export default Glasses;
