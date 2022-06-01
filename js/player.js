class Player {
  constructor(cards) {
    this.returned_cards = [];
    for (let i = 0; i < cards.length; i++) {
      this.returned_cards[i] = true;
    }
    this.main_card = equi_rand(cards);
    this.final_question = false;
  }
}

function computer_turn(game) {
  user_chat_element.style.display = "none";
  computer_chat_element.style.display = "flex";
  if (game.computer.returned_cards.filter((i) => i == true).length > 1) {
    game.current_computer_question = new Question();
    game.current_computer_question.display();
  } else {
    let question = document.createElement("p");
    question.innerHTML =
      "Is your monster " +
      game.cards[game.computer.returned_cards.indexOf(true)].name +
      " ?";
    question.classList = "question";
    // turn final question attributes to true
    game.computer.final_question = true;
    // add to DOM
    computer_question_element.appendChild(question);
  }
}

function user_turn(game) {
  // hide the chat of the computer turn
  computer_chat_element.style.display = "none";
  // show the chat of the user turn
  user_chat_element.style.display = "flex";
  // write the first user question
  user_question_element.innerHTML =
    "On which element of the monster to guess, do you want to ask the question?";
  // create the body parts buttons
  let body_parts_rand = rand_user_question_buttons(Object.keys(attributes));
  for (body_part_element of body_parts_rand) {
    create_user_response_button(body_part_element);
  }
  create_user_response_button_name(game);

  // refactorisation du tableau pour ne pas sélectionner l'élément name
  let body_parts = [];
  for (
    let i = 0;
    i < user_response_body_part_element.children.length - 1;
    i++
  ) {
    body_parts.push(user_response_body_part_element.children[i]);
  }

  //ajout des événements sur les boutons
  for (body_part_element of body_parts) {
    body_part_element.addEventListener("click", function () {
      // store the id of the clicked body part button
      let body_part = this.id;
      // write the new question about characteristic
      user_question_element.innerHTML =
        "On which characteristic of the " +
        body_part +
        " do you want to ask your question about?";
      erase_user_response_buttons();
      // create the characteristics buttons
      let characteristics = rand_user_question_buttons(
        Object.keys(attributes[body_part])
      );
      for (characteristic of characteristics) {
        // add the event listener on charateristic buttons
        create_user_response_button(characteristic).addEventListener(
          "click",
          function () {
            // store the id of the clicked charecteristic button
            let characteristic = this.id;
            // write the new question about attribute
            user_question_element.innerHTML =
              "Fill in the question you want to ask: Does your character heve ... " +
              body_part +
              "?";
            erase_user_response_buttons();
            // create the new buttons about attributes
            let attributes_rand = rand_user_question_buttons(
              attributes[body_part][this.id]
            );
            for (attribute of attributes_rand) {
              // add event listener on attributes buttons
              create_user_response_button(attribute[0]).addEventListener(
                "click",
                function () {
                  // write the response of the computer
                  user_question_element.innerHTML = "The response is : ";
                  erase_user_response_buttons();
                  // ask the computer and write the response
                  user_question_element.innerHTML += computer_answer(
                    game,
                    body_part,
                    characteristic,
                    this.id
                  );
                  // add event listener on the next button
                  create_user_response_button("next").addEventListener(
                    "click",
                    function () {
                      erase_user_response_buttons();
                      computer_turn(game);
                    }
                  );
                }
              );
            }
          }
        );
      }
    });
  }
}

function save_user_yes_answer() {
  computer_question_element.innerHTML = "";
  if (new_game.computer.final_question) {
    add_end_message("computer");
  } else {
    // find attribute and update computer returned_cards
    let i = 0;
    for (card of new_game.cards) {
      let current_body_part = Object.values(
        card[new_game.current_computer_question.body_part]
      );
      if (
        !current_body_part.includes(
          new_game.current_computer_question.attribute
        )
      ) {
        new_game.computer.returned_cards[i] = false;
      }
      i++;
    }
    user_turn(new_game);
  }
}

function save_user_no_answer() {
  computer_question_element.innerHTML = "";
  if (new_game.computer.final_question) {
    for (card in new_game.computer.returned_cards) {
      card = true;
    }
  } else {
    // find attribute and update computer returned_cards
    let i = 0;
    for (card of new_game.cards) {
      let current_body_part = Object.values(
        card[new_game.current_computer_question.body_part]
      );
      if (
        current_body_part.includes(new_game.current_computer_question.attribute)
      ) {
        new_game.computer.returned_cards[i] = false;
      }
      i++;
    }
    user_turn(new_game);
  }
}

function computer_answer(game, body_part, characteristic, attribute) {
  if (game.computer.main_card[body_part][characteristic] == attribute) {
    return "YES";
  } else {
    return "NO";
  }
}

function create_user_response_button_name(game) {
  create_user_response_button("name").addEventListener("click", function () {
    user_question_element.innerHTML = "Qui est-ce ?";
    erase_user_response_buttons();
    // create the input
    let input = document.createElement("input");
    input.type = "text";
    input.id = "name_input";
    input.innerHTML = "name_input";
    user_response_body_part_element.appendChild(input);
    // send the name
    let send_button = create_user_response_button("envoyer");
    send_button.addEventListener("click", function () {
      // write the response of the computer
      user_question_element.innerHTML = "The response is : ";
      erase_user_response_buttons();
      // if the last charactere of the name is a space, erase it
      if (
        game.computer.main_card.name.lastIndexOf(" ") ==
        game.computer.main_card.name.length - 1
      ) {
        game.computer.main_card.name = game.computer.main_card.name.substr(
          0,
          game.computer.main_card.name.length - 1
        );
      }
      // ask the computer and write the response
      if (game.computer.main_card.name == input.value.toLowerCase()) {
        user_question_element.innerHTML += "YES";
        create_user_response_button("next").addEventListener(
          "click",
          function () {
            add_end_message("user");
          }
        );
      } else {
        user_question_element.innerHTML += "NO";
        create_user_response_button("next").addEventListener(
          "click",
          function () {
            erase_user_response_buttons();
            computer_turn(game);
          }
        );
      }
    });
  });
}

function rand_user_question_buttons(array) {
  let result_array = [];
  let initial_array = array;
  let length = array.length;
  // on fait un tirage pour tous les éléments -1
  for (let i = 0; i < length - 1; i++) {
    // on tire un élément du tableau initial
    let picked_element = equi_rand(initial_array);
    // on l'enlève de ce tableau (pour pas le retirer ensuite)
    initial_array.splice(
      initial_array.findIndex((element) => element === picked_element),
      1
    );
    // on fait un pile ou face
    if (rademacher_rand()) {
      // si pile on met l'élément dans le tableau final
      result_array.push(picked_element);
    }
  }
  // on ajoute le dernier élément du tableau initial dans le tableau final
  result_array.push(initial_array[0]);
  return result_array;
}
