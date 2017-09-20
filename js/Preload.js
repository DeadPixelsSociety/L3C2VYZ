Jeu.Preload = function(){};

Jeu.Preload.prototype = {
  preload: function() {
    /*
     * Affichage du chargement du jeu
     * A ACTIVER QUAND ON AURA LES IMAGES!
     */
    //this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    //this.splash.anchor.setTo(0.5);
    //this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preload');
    //this.preloadBar.anchor.setTo(0.5);
    //this.load.setPreloadSprite(this.preloadBar);


    /*
     * Ajouter ici les ressources à charger
     */
    //this.load.image('clé', 'chemin/vers/image.png');
    //this.load.spritesheet('clé', 'chemin/vers/spritesheet.png', tailleFrameWidth, tailleFrameHeight);
    //this.load.audio('clé', 'chemin/vers/audio[.ogg|.mp3]');
  },

  create: function() {
    this.state.start('MainMenu');
  }
};
