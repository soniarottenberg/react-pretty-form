import React, { Component } from 'react';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      email: "",
      company_name: "",
      employees_number: "",
      current_provider: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let error = 0
    if (this.state.current_provider.length < 4) {
      error += 1
      alert("Halte là... C'est un peu court non ?")
    } else {

      const {
        email,
        company_name,
        employees_number,
        current_provider
      } = this.state
      alert(`Voici le détail de votre demande \n
        Votre email: ${email} \n
        Votre entreprise: ${company_name} \n
        Vos effectifs: ${employees_number} personnes \n
        Votre prestataire actuel: ${current_provider}`)
    }

  }

  _next() {
    let currentStep = this.state.currentStep
    let error = 0

    if (currentStep === 1 && this.state.email.length < 4) {
      error += 1
      alert("Halte là... C'est un peu court non ?")
    }

    if (currentStep === 2 && this.state.company_name.length < 4) {
      error += 1
      alert("Halte là... C'est un peu court non ?")
    }

    if (currentStep === 3 && this.state.employees_number < 50) {
      error += 1
      alert("Merci de rensiengner une valeur supérieur ou égale à 50 salariés.")
    }

    if (currentStep >= 1 && currentStep < 4 && error === 0) {
      currentStep += 1
    }

    console.log(currentStep);
    console.log(error);

    this.setState({
      currentStep: currentStep
    })
  }

  _prev() {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    })
  }

  get previousButton(){
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <button
        className="yellow-button prev"
        type="button" onClick={this._prev}>
        Précédent
        </button>
      )
    }
  return null;
  }

  get nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep < 4){
      return (
        <button
          className="yellow-button next float-right"
          type="button" onClick={this._next}>
        Suivant
        </button>
      )
    }
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            company_name={this.state.company_name}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            employees_number={this.state.employees_number}
          />
          <Step4
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            current_provider={this.state.current_provider}
          />
        </form>
      {this.previousButton}
      {this.nextButton}
      </React.Fragment>
    );
  }
}

export default Form;
