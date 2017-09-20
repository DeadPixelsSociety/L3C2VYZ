var Jeu = Jeu || {};

Jeu.Boot = function(){};

Jeu.Boot.prototype = {
  preload: function() {
    /*
     * Chargement minimum pour afficher l'état du chargement du jeu
     * Et initialisation des modules communs à tout le jeu
     * Entre autre une image de 'preload-bar' et une du logo..??
     * this.load.image('clé', 'chemin/vers/image.png');
     */
  },
  create: function() {
    this.game.stage.backgroundcolor = '#000';

    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.minWidth = 250;
    this.scale.minHeight = 150;
    this.scale.maxWidth = 4000;
    this.scale.maxHeight = 1920;

    this.scale.pageAlignHorizontally = true;

    this.game.scale.refresh();

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.state.start('Preload');
  }
};
