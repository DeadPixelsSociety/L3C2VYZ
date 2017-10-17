var Jeu = Jeu || {};

Jeu.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

Jeu.game.state.add('Boot', Jeu.Boot);
Jeu.game.state.add('Preload', Jeu.Preload);
Jeu.game.state.add('MainMenu', Jeu.MainMenu);
// Ajouter ici les niveaux du jeu ou ce qui fait parti des états du jeu (ex: Option, GameOver etc...)
Jeu.game.state.add('niveau0', Jeu.niveau0);

Jeu.game.state.start('Boot');
