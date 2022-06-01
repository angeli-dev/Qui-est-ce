/***DRAW FANTOM */
var fantom_interval;
function draw_fantom() {
  fantom_interval = setInterval(init_fantom, densite_rand(6000));
}

/*******  DISPLACE FANTOM  *************/
//init position
function init_fantom() {
  let fantom = document.createElement("div");
  fantom.classList.add("fantom");
  fantom.style.left = 500 + "px";
  fantom.style.top = 200 + "px";
  let width = 300;
  fantom.style.width = width + "px";
  fantom.style.height = width + "px";
  //fantom.style.backgroundColor = "rgb(" + 15 + "," + 20 + "," + 50 + ")";
  fantom.style.background = "url('./assets/img/ghost.gif') no-repeat";
  fantom.style.backgroundSize = "cover";
  fantom.style.opacity = "0";
  game.appendChild(fantom);
  setTimeout(function () {
    fantoms_element = document.querySelectorAll(".fantom");
    fantom.style.opacity = "1";
    add_move_with_mouse(fantom);
  }, 2000);
}

// function displace fantom
setInterval(function () {
  for (let i = 0; i < fantoms_element.length; i++) {
    let fantom = fantoms_element[i];
    let move_top = densite_rand(100);
    let move_bottom = densite_rand(100);
    fantom.style.top =
      fantom.getBoundingClientRect().top + move_top - move_bottom + "px";
    let move_left = densite_rand(200);
    let move_right = densite_rand(200);
    fantom.style.left =
      fantom.getBoundingClientRect().left + move_left - move_right + "px";
  }
}, 1000);

/*******  MOVE FANTOM WITH MOUSE  ********/
function add_move_with_mouse(fantom) {
  fantom.onmousedown = function (event) {
    fantom.remove();
  };
}
