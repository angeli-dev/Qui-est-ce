function chainesMarkov(debut, objNgramme, ordre, chaineMots, liste_mots) {
  //complète le tableau "debut" avec les n-gramme que l'on trouve à chaque début de mot (s'il existe).
  for (let i = 0; i < liste_mots.length; i++) {
    let lettres = liste_mots[i].substring(0, ordre);
    if (lettres.length == ordre) {
      debut.push(lettres);
    }
  }
  for (let i = 0; i < liste_mots.length; i++) {
    chaineMots = chaineMots + liste_mots[i] + " ";
  }
  //parcourt la chaîne de caractères "chaineMots"
  for (let i = 0; i < chaineMots.length; i++) {
    let ngramme = chaineMots.substring(i, i + ordre);
    //vérifie si l'objet "objNgramme" possède déjà un attribut de la suite de caractère étudiée
    if (!objNgramme[ngramme]) {
      //créer un tableau vide pour la valeur de l'attribut de la suite de caractère étudiée
      objNgramme[ngramme] = [];
      //place le caractère qui suit la suite de caractère étudiée dans le tableau associé objNgramme[caractère étudié]
      objNgramme[ngramme].push(chaineMots.charAt(i + ordre));
    } else {
      objNgramme[ngramme].push(chaineMots.charAt(i + ordre));
    }
  }
}

function createWord(debut, objNgramme, ordre, nbreLettreMax) {
  //tire au sort un des n-grammes
  let ngrammCourant = equilateral_rand(debut);
  let resultat = ngrammCourant;

  for (let i = 0; i < nbreLettreMax && objNgramme[ngrammCourant]; i++) {
    //prochain contient un caractère tiré au sort dans le tableau associé à la suite de caractère
    let possible = objNgramme[ngrammCourant];
    let prochain = equilateral_rand(possible);
    //stop la boucle si le caractère tiré au sort est un espace (afin d'éviter des "mots à trou")
    if (
      prochain == " " &&
      rand([
        [true, 1],
        [false, 1],
      ])
    ) {
      break;
    }
    resultat = resultat + prochain;
    //sélectionne le dernier n-gramme du mot en cours de construction
    ngrammCourant = resultat.substring(
      resultat.length - ordre,
      resultat.length
    );
  }
  return resultat;
}
