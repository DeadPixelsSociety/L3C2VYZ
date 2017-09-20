Jeu.Objet = function(/* paramètres */){
  // Constructeur de l'objet
}

Jeu.Objet.prototype = {
  update: function(){
    // Fonction de mise à jour de l'objet
    // Se produit après la mise à jour de l'état (level)
  },
  fonction: function(/* paramètres */){
    // Définitions de fonctions supplémentaires si il le faut
  }
};

Jeu.Objet.prototype.constructor = Jeu.Objet;
