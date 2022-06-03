import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import loading from './Hourglass.gif'

export class Spinner extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className='text-center'>
        <img className="my-3" src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner
