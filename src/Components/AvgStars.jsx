import React, {Component, Fragment } from 'react';
import './css/stars.css';

class AvgStars extends Component {
  constructor(props) {
        super(props);
        this.state = {
          avgRating: '',
          numOfRatings: '',
          containerPercentage: ''
        }

        this.fetchState = this.fetchState.bind(this);
        this.setFullStars = this.setFullStars.bind(this);
    }

    fetchState () {
      fetch('http://localhost:6001/avgRating', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log('get avg rating', data)
        this.setState({avgRating: data})
      })
      .catch(err => {
          console.log('Error: ', err)
      })

      fetch('http://localhost:6001/numOfRatings', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log('get num of ratings', data)
        this.setState({numOfRatings: data})
      })
      .catch(err => {
          console.log('Error: ', err)
      })

      fetch('http://localhost:6001/containerPercentage', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log('get container percentage', data)
        this.setState({containerPercentage: data})
      })
      .then(this.setFullStars())
      .catch(err => {
          console.log('Error: ', err)
      })
    }

    setFullStars () {
      let container = document.querySelector('.full-stars-container');
      container.style.width = `${this.state.containerPercentage}%`
    }

    componentDidMount() {
      this.fetchState();
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
        <b>{this.state.avgRating} out of 5</b>
        <i>{this.state.numOfRatings} global ratings</i>
      </Fragment>
    )
  }
}

export default AvgStars;
