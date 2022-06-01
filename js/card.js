const ordre = 3; //donne l'ordre du n_gramme
const nbreLettreMax = 10;
let chaineMots = "";
let objNgramme = {};
let debut = [];
chainesMarkov(debut, objNgramme, ordre, chaineMots, liste_mots);
class Card {
  constructor() {
    //body
    this.body = {
      colours: rand(colours),
      body_types: rand(body_types),
    };
    //antenna(s)
    this.antenna = {
      numbers: rand(numbers),
      colours: rand(colours),
    };
    //eye(s)
    this.eye = {
      numbers: rand(numbers),
      colours: rand(colours),
    };
    //mouth
    this.mouth = { mouth_types: rand(mouth_types) };
    //name generated with Markov's chain

    this.name = createWord(debut, objNgramme, ordre, nbreLettreMax);
  }
  display(parent) {
    //body
    let body = document.createElement("p");
    body.innerHTML =
      '<img class="monster-attribute" src="assets/img/body/colours/' +
      this.body["colours"] +
      '.png"/>' +
      '<img class="monster-attribute" src="assets/img/body/types/' +
      this.body["body_types"] +
      '.png"/>';
    parent.appendChild(body);

    //antenna(s)
    let antenna = document.createElement("p");
    antenna.innerHTML =
      '<img class="monster-attribute" src="assets/img/antenna/' +
      this.antenna["numbers"] +
      "_" +
      this.antenna["colours"] +
      '.png"/>';
    parent.appendChild(antenna);

    //eye(s)
    let eye = document.createElement("p");
    eye.innerHTML =
      '<img class="monster-attribute" src="assets/img/eye/' +
      this.eye["numbers"] +
      "_" +
      this.eye["colours"] +
      '.png"/>';
    parent.appendChild(eye);

    //mouth
    let mouth = document.createElement("p");
    mouth.innerHTML =
      '<img class="monster-attribute" src="assets/img/mouth/' +
      this.mouth["mouth_types"] +
      '.png"/>';
    parent.appendChild(mouth);

    //name
    let name = document.createElement("p");
    name.classList = "card_name";
    name.innerHTML = this.name;
    parent.appendChild(name);
  }
}
