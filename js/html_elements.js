let yes_element = document.querySelector("#yes");
let no_element = document.querySelector("#no");
let computer_chat_element = document.querySelector("#computer-chat");
let computer_question_element = document.querySelector("#computer-question");
let user_chat_element = document.querySelector("#user-chat");
let user_question_element = document.querySelector("#user-question");
let user_response_body_part_element = document.querySelector(
  "#user-reponse-body-part"
);
let user_response_attributes_type_element = document.querySelector(
  "#user-reponse-attributes_type"
);
let end_message_element = document.querySelector("#end-message");
let winner_end_message_element = document.querySelector("#winner-end-message");
let game_element = document.querySelector("#game");
let game_card_element = document.querySelector("#game-cards");
let review_element = document.querySelector("#review");
let introduction_element = document.querySelector("#introduction");
let play_element = document.querySelector("#play");
let fantoms_element = document.querySelectorAll(".fantom");

/*-------------------------------------------------------------*/

function create_user_response_button(name) {
  let new_button = create_button(name);
  user_response_body_part_element.appendChild(new_button);
  return new_button;
}

function erase_user_response_buttons() {
  user_response_body_part_element.innerHTML = "";
}

function create_button(name) {
  let new_button = document.createElement("button");
  new_button.id = name;
  new_button.innerHTML = name;
  return new_button;
}

function add_end_message(winner) {
  // hide the chat of the computer turn
  computer_chat_element.style.display = "none";
  for (let i = 0; i < fantoms_element.length; i++) {
    clearInterval(fantom_interval);
    fantoms_element[i].remove();
  }
  // show the chat of the user turn
  user_chat_element.style.display = "none";
  end_message_element.style.display = "flex";
  winner_end_message_element.innerHTML = winner;
  let next_button = create_button("next");
  end_message_element.appendChild(next_button);
  next_button.addEventListener("click", function () {
    game_element.style.display = "none";
    review_element.style.display = "block";
  });
}
