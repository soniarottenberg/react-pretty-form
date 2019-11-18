import React, { Component } from 'react';

class Step1 extends Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null
    }

    return (
      <div className="form-group">
        <label htmlFor="email">Renseignez votre adresse email</label>
        <input
          className="form-control"
          id="email"
          name="email"
          type="text"
          placeholder=""
          value={this.props.email}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default Step1;
