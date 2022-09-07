import React, {Component, Fragment } from 'react';
import './css/stars.css';
import AvgStars from './AvgStars';

class Stars extends Component {
  constructor(props) {
        super(props);
        this.state = {
          recorded: false,
          rating: 0
        }

        this.hover = this.onMouseOver.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
        this.onClick = this.onClick.bind(this);
        this.getRating = this.getRating.bind(this);
    }

  onMouseOver (e) {
    this.previous (e.target);
    this.next (e.target);
  }

  onMouseLeave (e) {
    if (this.state.recorded == false) {
      let stars = document.querySelectorAll('.stars span');
      stars.forEach(star => star.innerHTML = '&#9734;');
    }
  }

  previous (e) {
    e.innerHTML = '&#9733;'
    if (e.previousElementSibling) this.previous (e.previousElementSibling);
  }

  next (e) {
    if (e.nextElementSibling) {
      e.nextElementSibling.innerHTML = '&#9734;'
      this.next(e.nextElementSibling);
    }
  }

  onClick (e) {
    this.setState({recorded:true});
    this.getRating(e.target, 1);

    console.log('state',this.state)
  }

  getRating (e, rating) {
    if (e.previousElementSibling) {
      rating++;
      this.getRating(e.previousElementSibling, rating)
    } else this.setState({rating: rating})
  }

  render() {
    return (
      <Fragment>
        {this.state.recorded ?
          <Fragment>
            <p>Thank you for sharing your rating {this.state.rating > 0 ? `of ${this.state.rating} star${this.state.rating > 1 ? 's' : ''}` : ''}{this.state.rating < 4 ? '. Let us know how we can improve!' : '!'}</p>
            <AvgStars />
          </Fragment>
          :<Fragment>
            <i>Would you like to rate your experience with Star Rating?</i>
            <div className="stars" onMouseLeave = {(e)=>this.onMouseLeave(e)}>
              <span onMouseOver={(e)=>this.onMouseOver(e)} onClick={(e)=>this.onClick(e)}>&#9734;</span>
              <span onMouseOver={(e)=>this.onMouseOver(e)} onClick={(e)=>this.onClick(e)}>&#9734;</span>
              <span onMouseOver={(e)=>this.onMouseOver(e)} onClick={(e)=>this.onClick(e)}>&#9734;</span>
              <span onMouseOver={(e)=>this.onMouseOver(e)} onClick={(e)=>this.onClick(e)}>&#9734;</span>
              <span onMouseOver={(e)=>this.onMouseOver(e)} onClick={(e)=>this.onClick(e)}>&#9734;</span>
            </div>
          </Fragment>}
      </Fragment>
    )
  }
}

export default Stars;
