Jeu.MainMenu = function(){};

Jeu.MainMenu.prototype = {
  create: function() {
    var text = "Bonjour !! L3C2VYZ Team !";
    var style = {font: "30px Arial", fill: "#fff", align: "center"};
    var t = this.game.add.text(this.game.width/2, this.game.height/2, text, style);
    t.anchor.set(0.5);
  }
};
