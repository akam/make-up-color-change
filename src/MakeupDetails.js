import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getRandomMakeup, getRandomColor } from './actions'

class MakeupDetails extends Component {
  // make our AJAX call when the component mounts
  componentDidMount () {
    debugger;
    this.props.getRandomMakeup();
    setInterval(()=>(
      this.props.getRandomColor(this.props)
    ), 3000);
  }
  render () {
    debugger
    const { name, brand, price, description, image_link } = this.props
    return (
      <div style={{background: this.props.color}}>
        <section>
          blah
          <h1>{name} - {brand}</h1>
          <h2>{price}</h2>
          <p>{description}</p>
          <img src={image_link} alt=""/>
        </section>
      </div>
    )
  }
}

// after actions are dispatched, add the redux state onto props for the component
const mapStateToProps = (state, ownProps) => {
  debugger;
  return {...state.makeupData, ...state.color, ...ownProps}
}

// make sure we connect this component with redux and export it out
// connect(mapStateToProps is a wrapper) and you export MakeupDetails with the wrapped props
export default connect(mapStateToProps, {getRandomMakeup, getRandomColor})(MakeupDetails)
