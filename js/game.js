class Game {
  constructor(cards_number) {
    this.cards = generate_cards_array(cards_number);
    this.user = new Player(this.cards);
    this.computer = new Player(this.cards);
    this.current_computer_question;
  }
  start() {
    display_cards(this.cards);
    display_main_card(this.user.main_card);
  }
}

function generate_cards_array(cards_number) {
  let cards_array = [];
  for (let i = 0; i < cards_number; i++) {
    cards_array[i] = new Card();
  }
  return cards_array;
}

function display_cards(cards) {
  for (let card of cards) {
    // create new div card
    let card_element = document.createElement("div");
    card_element.classList = "card";

    // create the structure
    let card_inner = document.createElement("div");
    card_inner.classList = "card-inner";
    card_element.appendChild(card_inner);

    let card_front = document.createElement("div");
    card_front.classList = "card-front";
    card_inner.appendChild(card_front);

    let card_back = document.createElement("div");
    card_back.innerHTML = "click to return";
    card_back.classList = "card-back";
    card_inner.appendChild(card_back);

    // add informations of the current card in the front of the card
    card.display(card_front);

    // add the card to the game in the DOM
    document.querySelector("#cards").appendChild(card_element);
  }
}

function display_main_card(card) {
  // create new div card
  let card_element = document.createElement("div");
  card_element.classList.add("card", "main-card");

  // add informations of the current card in the front of the card
  card.display(card_element);

  // add the card to the game in the DOM
  document.querySelector("#main-card-box").appendChild(card_element);
}
