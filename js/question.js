class Question {
  constructor() {
    // choose a part of the body randomly
    this.body_part = equi_rand(Object.keys(attributes));
    // choose an array of attributes of this part of body
    this.attributes_array = equi_rand(attributes[this.body_part]);
    // select an attribute of this array
    this.attribute = rand(Object.values(this.attributes_array));
  }
  display() {
    // create html elements
    let question = document.createElement("p");
    question.innerHTML =
      "Does your monster have... " +
      this.attribute +
      " " +
      this.body_part +
      " ?";
    // add to DOM
    computer_question_element.appendChild(question);
  }
}
