import React, { Component } from "react";
import "./index.scss";
class Progress extends Component {
  constructor(props) {
    super();
  }

  render() {
    let { countText } = this.props;
    return (
      <div className="progress">
        <div className="progress-body">
          <div className="dot-box">
            <span className="dot dot-1" />
            <span className="dot dot-2" />
            <span className="dot dot-3" />
          </div>
          <p className="status-text"> {`支付进行中${countText}s`} </p>
        </div>
      </div>
    );
  }
}

export default Progress;

 
