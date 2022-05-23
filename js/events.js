// returning cards
let cards_elements = document.querySelectorAll(".card");
let cards_inner_elements = document.querySelectorAll(".card-inner");

for (let i = 0; i < cards_elements.length; i++) {
  cards_elements[i].addEventListener("click", function () {
    if (cards_inner_elements[i].className.includes("card-disactive")) {
      cards_inner_elements[i].classList.remove("card-disactive");
      new_game.user.returned_cards[i] = true;
    } else {
      cards_inner_elements[i].classList.add("card-disactive");
      new_game.user.returned_cards[i] = false;
    }
  });
}

// save the user's answers
yes_element.addEventListener("click", save_user_yes_answer);
no_element.addEventListener("click", save_user_no_answer);

// play the game
play_element.addEventListener("click", function () {
  introduction_element.style.display = "none";
  game_element.style.display = "block";
});
