Jeu.Objet = function (/* paramètres */) {
  // Constructeur de l'objet
}

// Si l'on veut récupérer les fonctions d'une autre classe (souvent Sprite du fait que l'on fait des objets que l'on voit?)
//Jeu.Objet.prototype = Object.create(Phaser.Sprite.prototype);
Jeu.Objet.prototype.constructor = Jeu.Objet;

Jeu.Objet.prototype.update = function () {
  // Fonction de mise à jour de l'objet
  // Se produit après la mise à jour de l'état (level)
}

Jeu.Objet.prototype.function = function(/* paramètres */) {
  // Définitions de fonctions supplémentaires si il le faut
}
