const ordre = 3; //donne l'ordre du n_gramme
const nbreLettreMax = 10;
let chaineMots = "";
let objNgramme = {};
let debut = [];

class Card {
  constructor() {
    //body
    this.body = {
      colours: rand(colours),
      body_types: rand(body_types),
    };
    //antenna(s)
    this.antenna = {
      number: rand(numbers),
      colours: rand(colours),
    };
    //eye(s)
    this.eye = {
      number: rand(numbers),
      colours: rand(colours),
    };
    //mouth
    this.mouth = { mouth_types: rand(mouth_types) };
    //name generated with Markov's chain
    chainesMarkov(debut, objNgramme, ordre, chaineMots, liste_mots);
    this.name = createWord(debut, objNgramme, ordre, nbreLettreMax);
  }
  display(parent) {
    //body
    let body = document.createElement("p");
    body.innerHTML =
      this.body["colours"] + " " + this.body["body_types"] + " body";
    parent.appendChild(body);
    //antenna(s)
    let antenna = document.createElement("p");
    antenna.innerHTML =
      this.antenna["number"] + " " + this.antenna["colours"] + " antenna(s)";
    parent.appendChild(antenna);
    //eye(s)
    let eye = document.createElement("p");
    eye.innerHTML = this.eye["number"] + " " + this.eye["colours"] + " eye(s)";
    parent.appendChild(eye);
    //mouth
    let mouth = document.createElement("p");
    mouth.innerHTML = this.mouth["mouth_types"] + " mouth ";
    parent.appendChild(mouth);
    //name
    let name = document.createElement("p");
    name.classList = "card_name";
    name.innerHTML = this.name;
    parent.appendChild(name);
  }
}
