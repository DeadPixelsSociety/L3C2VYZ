Jeu.niveau0 = function(){};

Jeu.niveau0.prototype.create = function() {
  // Ici on définit ce que contiendra le level et on initialise toutes les variables
  var test = Jeu.game.add.sprite(200, 200, 'perso');
}

Jeu.niveau0.prototype.init = function(/* variables */){
  // Ici on initialise les variables qui sont passé d'un état à un autre, example: le score en cours
  
}

Jeu.niveau0.prototype.update = function(){
  // Cette fonction sera éxecutée en boucle, c'est donc un bon endroit pour y écrire la logique du genre "vérifier les collisions"

}
