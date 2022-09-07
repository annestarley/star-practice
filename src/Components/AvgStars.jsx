import React, {Component, Fragment } from 'react';
import './css/stars.css';

class AvgStars extends Component {
  constructor(props) {
        super(props);
        this.state = {}
    }


  render() {
    return (
      <Fragment>
        <h3>Customer Reviews</h3>
        <div className='stars-container'>
          <span className='empty-stars-container'>
            <span>&#9734;</span>
            <span>&#9734;</span>
            <span>&#9734;</span>
            <span>&#9734;</span>
            <span>&#9734;</span>
          </span>
          <span className='full-stars-container'>
            <span className='full-stars'>&#9733;</span>
            <span className='full-stars'>&#9733;</span>
            <span className='full-stars'>&#9733;</span>
            <span className='full-stars'>&#9733;</span>
            <span className='full-stars'>&#9733;</span>
          </span>
        </div>
        <b> 2.5 out of 5</b>
        <i>25 global ratings</i>
      </Fragment>
    )
  }
}

export default AvgStars;
