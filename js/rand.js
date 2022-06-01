// tirage aléatoire à n résultats possibles
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

// Loi uniforme discrète : un tirage aléatoire à n résultats possibles équiprobables
function equi_rand(data) {
  let rand = Math.random();
  let rank = 1;
  for (i in data) {
    if (rand < rank / Object.values(data).length) {
      titi = i;
      break;
    }
    rank += 1;
  }
  return data[titi];
}

// Fonction à densité de mesure de Lebesgue
function densite_rand(gamma) {
  let rand = Math.random();
  return -gamma * Math.log(1 - rand);
}

// Loi de Bernoulli : un tirage aléatoire à deux résultats possibles, de probabilités respectives p et 1-p
function bernouilli_rand(p) {
  let result = Math.random();
  if (result < p) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Loi de Rademacher : une Bernoulli équiprobable (p=1/2) où le succès vaut 1 et l'échec −1
function rademacher_rand() {
  return bernouilli_rand(0.5);
}
