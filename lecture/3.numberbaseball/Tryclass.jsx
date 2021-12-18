import React, {Component} from 'react';

class Tryclass extends Component {
  render(){
    return(
      <li>
        <div>{this.props.tryInfo.try}</div>
        <div>{this.props.tryInfo.result}</div>
      </li>
    )
  }
}

export default Tryclass;