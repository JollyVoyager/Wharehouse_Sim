var bootState = {
  preload: function() {
    game.load.image("platform", "assets/platform.png");
  },

  create: function() {
    game.state.start("load");
  }
};
