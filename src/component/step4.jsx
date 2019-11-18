import React, { Component } from 'react';

class Step4 extends Component {
  render() {
    if (this.props.currentStep !== 4) {
      return null
    }

    return (
      <div className="form-group">
        <label htmlFor="current_provider">Quel est votre prestataire actuel ?</label>
        <input
          className="form-control"
          id="current_provider"
          name="current_provider"
          type="text"
          placeholder=""
          value={this.props.current_provider}
          onChange={this.props.handleChange}
        />
        <button className="yellow-button plain">Envoyer ma demande</button>
      </div>
    );
  }
}

export default Step4;
