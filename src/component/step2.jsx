import React, { Component } from 'react';

class Step2 extends Component {
  render() {
    if (this.props.currentStep !== 2) {
      return null
    }

    return (
      <div className="form-group">
        <label htmlFor="company_name">Renseignez le nom de votre entreprise</label>
        <input
          className="form-control"
          id="company_name"
          name="company_name"
          type="text"
          placeholder=""
          value={this.props.company_name}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default Step2;
