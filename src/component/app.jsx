import React, { Component } from 'react';
import Form from './form';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="intro">
            <img id="epsor-logo" src="https://images.prismic.io/epsor%2F44035443-bc18-487a-ab78-f3119a1e2b48_logo-epsor-normal.svg?auto=compress,format" alt=""/>
            <img id ="background-dots"src="https://epsor.fr/images/SVG/illu-dots-gray.svg" alt=""/>
            <h2>L’épargne salariale et retraite <strong>en toute simplicité</strong></h2>
          </div>
          <div className="presentation">
            <p><strong>1 salarié sur 2</strong> bénéficiant d’épargne salariale déclare ne pas savoir la gérer. <br/>Nous sommes là pour eux comme pour les autres.</p>
            <p>Avec Epsor, offrez à vos collaborateurs des avantages salariaux à la hauteur de leur engagement. <br/>Vous souhaitez prendre contact ?</p>
          </div>
        </div>
        <Form />
      </div>
    );
  }
}

export default App;
