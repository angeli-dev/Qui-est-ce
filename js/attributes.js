let colours = [
  ["green", 1],
  ["blue", 1],
  ["purple", 1],
  ["red", 1],
  ["yellow", 1],
  ["orange", 1],
  ["pink", 1],
];

let numbers = [
  ["1", 1],
  ["2", 1],
  ["3", 1],
];

let body_types = [
  ["feathered", 1],
  ["fur", 1],
  ["scales", 1],
];

let mouth_types = [
  ["kissing", 1],
  ["grimacing", 1],
  ["sad", 1],
  ["smiling", 1],
  ["laughing", 1],
];

let attributes = {
  body: { colours: colours, body_types: body_types },
  antenna: { colours: colours, numbers: numbers },
  eye: { colours: colours, numbers: numbers },
  mouth: { mouth_types: mouth_types },
};
