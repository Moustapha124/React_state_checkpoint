import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css';

class App extends Component {
  // Définition de l'état initial du composant
  state = {
    person: {
      fullName: 'Moustapha Sall',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgSrc: '/Images/developpeur.jpg',
      profession: 'Developpeur'
    },
    show: false, // Indique si le profil de la personne doit être affiché
    elapsedTime: 0 // Temps écoulé depuis le montage du composant
  };

  // Méthode du cycle de vie appelée après le montage du composant
  componentDidMount() {
    // Mise en place d'un intervalle pour mettre à jour elapsedTime toutes les secondes
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        elapsedTime: prevState.elapsedTime + 1
      }));
    }, 1000);
  }

  // Méthode du cycle de vie appelée juste avant le démontage du composant
  componentWillUnmount() {
    // Nettoyage de l'intervalle pour éviter les fuites de mémoire
    clearInterval(this.interval);
  }

  // Méthode pour basculer l'état show entre vrai et faux
  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { person, show, elapsedTime } = this.state; // Extraction de l'état dans des variables

    return (
      <div className="App">
        <Button variant="warning" onClick={this.toggleShow}style={{marginTop:'30px'}}>Toggle Profile</Button> {/* Bouton pour basculer l'affichage du profil */}
        {/* Conditionnellement affiche les détails de la personne si show est vrai */}
        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Bio:<strong>{person.bio}</strong></p>
            <p>Profession: <strong>{person.profession}</strong></p>
          </div>
        )}
        <p><strong>Elapsed Time:</strong> {elapsedTime} seconds</p> {/* Affiche le temps écoulé depuis le montage du composant */}
      </div>
    );
  }
}

export default App;
