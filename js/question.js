class Question {
  constructor() {
    // choose a part of the body randomly
    this.body_part = equilateral_rand(Object.keys(attributes));
    // choose an array of attributes of this part of body
    this.attributes_array = equilateral_rand(attributes[this.body_part]);
    // select an attribute of this array
    this.attribute = rand(Object.values(this.attributes_array));
  }
  display() {
    // create html elements
    let question = document.createElement("p");
    question.innerHTML =
      "Est-ce-que ton monstre possède ... " +
      this.attribute +
      " " +
      this.body_part +
      " ?";
    // add to DOM
    computer_question_element.appendChild(question);
  }
}
