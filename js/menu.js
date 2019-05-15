var menuState = {
    create: function() {

      var txtWharehouse = game.add.text(game.world.centerX, 150, "WHAREHOUSE SIMULATOR", {
        font: "30px emulogic",
        fill: "#fff"
      });
      txtWharehouse.anchor.set(0.5);
  
      var txtStart = game.add.text(game.world.centerX, 550, "START", {
        font: "20px emulogic",
        fill: "#fff"
      });
      txtStart.anchor.set(0.5);
  
      game.add
        .tween(txtStart)
        .to({ y: 250 }, 1000)
        .start();
  
      game.time.events.add(
        1000,
        function() {
            var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
            enterKey.onDown.addOnce(this.startGame, this);
        },
        this
      );
    },
  
    startGame: function() {
      game.state.start("stage1");
    }
  };