var loadState = {
  preload: function() {
    var txtLoad = game.add.text(
      game.world.centerX,
      150,
      "Wharehouse Simulator",
      {
        font: "30px emulogic",
        fill: "#fff"
      }
    );
    txtLoad.anchor.set(0.5);

    // var platform = game.add.image(game.world.centerX, 250, "platform");
    // platform.anchor.set(0.5);

    game.load.image("platform", "assets/platform.png");
    game.load.image("emp", "assets/Emp_40x40.png");
    game.load.image("empi", "assets/Emp_40x40_drt.png");

		game.physics.startSystem(Phaser.Physics.ARCADE);
  },

  create: function() {
    game.state.start("menu");
  }
};
