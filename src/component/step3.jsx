import React, { Component } from 'react';

class Step3 extends Component {
  render() {
    if (this.props.currentStep !== 3) {
      return null
    }

    return (
      <div className="form-group">
        <label htmlFor="employees_number">Combien d'employés compte votre entreprise ?</label>
        <input
          className="form-control"
          id="employees_number"
          name="employees_number"
          type="number"
          placeholder=""
          value={this.props.employees_number}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default Step3;
