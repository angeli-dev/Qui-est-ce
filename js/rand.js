function rand(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i][1];
  }
  if (sum != data.length) {
    throw new Error("La somme des probabilités doit être égale à 1.");
  }
  let rand = Math.random();
  let i = 0;
  let rank = data[i][1];
  for (i; rand >= rank / data.length; i++) {
    rank += data[i + 1][1];
  }
  return data[i][0];
}

function equilateral_rand(data) {
  let rand = Math.random();
  //let i = 0;
  let rank = 1;
  /*for (i; rand >= rank / data.length; i++) {
    rank += 1;
  }*/

  for (i in data) {
    if (rand < rank / Object.values(data).length) {
      titi = i;
      break;
    }
    rank += 1;
  }

  return data[titi];
}

function densite_rand(gamma) {
  let rand = Math.random();
  return -gamma * Math.log(1 - rand);
}

// test fonction densité
/*
time = new Date().getSeconds();
console.log(time);
console.log(densite_rand(300));
*/
