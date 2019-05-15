var stage1State = {
  create: function() {


    this.section = {x:[381, 625], y:[271, 271]}

    // game.add.image(0,0,'platform');
    // game.add.image(350,0,'platform');
    // game.add.image(0,20,'platform');
    // game.add.image(350,20,'platform');

    

    this.maze = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
      [1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];



    this.blocks = game.add.group();
    this.blocks.enableBody = true;

    for (var row in this.maze) {
      for (var col in this.maze[row]) {
        var tile = this.maze[row][col];

        var x = col * 50;
        var y = row * 50;

        if (tile === 1) {
          var block = this.blocks.create(x, y, "platform");
              block.body.immovable = true;

        } else 
        if (tile === 2) {
          this.emp = game.add.sprite(x + 25, y + 25, "emp");
          this.emp.anchor.set(.5);
          game.physics.arcade.enable(this.emp);
          

        }else
        if (tile === 3){
            this.enemy = game.add.sprite(x , y  , "empi")
            game.physics.arcade.enable(this.enemy);
            this.enemy.enableBody = true;
           

        }
        else
        if (tile === 4){
            this.empi = game.add.sprite(x , y, "empi")
            game.physics.arcade.enable(this.empi);
            this.empi.enableBody = true;
           

        }
      }
    }

    
    // var tweenQ;
    // tweenQ = game.add.tween(this.enemy);
    // tweenQ.to({
    //     x: [612, 612, 400, 400, 612, 612, 250], y:[350, 260, 260, 260, 260, 350, 350]}, 15000, "Linear", true, 1000);
    // tweenQ.loop(true);
    // tweenQ.start();

    // var tweenA;
    // tweenA = game.add.tween(this.empi);
    // tweenA.to ({
    //     x: [618, 607, 384, 607, 607, 250], y:[142, 255, 255, 255, 142, 142]}, 10000, "Linear", true, 10000);
    // tweenA.loop(true);
    // tweenA.start(true);
    
    //tweenQ.chain(tweenA);
   
    this.controls = game.input.keyboard.createCursorKeys();
},

    update: function(){
        game.physics.arcade.collide(this.emp, this.blocks);
        game.physics.arcade.collide(this.empi, this.enemy);
        game.physics.arcade.collide(this.enemy, this.blocks);

        if(Math.floor(this.enemy.x)%50 === 0 && Math.floor(this.enemy.y)%50 === 0){

          //depois de verificar se o enemy está a passar no meio da célula, verificar qual célula que ele 
          // está a passar, saber qual a célula em Col e Row.  
          //Mathfloor arredonda para baixo ex: 25.3 para 25
      
              var enemyCol = (Math.floor(this.enemy.x/50));
              var enemyRow = (Math.floor(this.enemy.y/50));
              var validPath = [];
              
              if(this.maze[enemyRow][enemyCol-1] !== 1 && this.enemy.direction !== 'RIGHT' && this.maze[enemyRow][enemyCol-1] !== 4){
                  validPath.push('LEFT');
              }
              if(this.maze[enemyRow][enemyCol+1] !== 1 && this.enemy.direction !== 'LEFT'&& this.maze[enemyRow][enemyCol+1] !== 4){
                  validPath.push('RIGHT');
              }
              if(this.maze[enemyRow-1][enemyCol] !== 1 && this.enemy.direction !== 'DOWN' && this.maze[enemyRow-1][enemyCol] !== 4){
                  validPath.push('UP');
              }
              if(this.maze[enemyRow+1][enemyCol] !== 1 && this.enemy.direction !== 'UP' && this.maze[enemyRow+1][enemyCol] !== 4){
                  validPath.push('DOWN');
              }
              
              this.enemy.direction = validPath[Math.floor(Math.random() * validPath.length)];
          };
          switch(this.enemy.direction){
              case 'LEFT':
                  this.enemy.x -= 1;
                  break;
              case 'RIGHT':
                  this.enemy.x += 1;
                  break;
              case 'UP':
                  this.enemy.y -= 1;
                  break;
              case 'DOWN':
                  this.enemy.y += 1;
                  break;
              
          };
          
          // if(Math.floor(this.empi.x)%50 === 0 && Math.floor(this.empi.y)%50 === 0){
      
          //       var empiCol = (Math.floor(this.empi.x/50));
          //       var empiRow = (Math.floor(this.empi.y/50));
          //       var validPath2 = [];
                
          //       if(this.maze[empiRow][empiCol-1] !== 1 && this.empi.direction !== 'RIGHT' && this.maze[empiRow][empiCol-1] !== 3 ){
          //           validPath2.push('LEFT');
          //       }
          //       if(this.maze[empiRow][empiCol+1] !== 1 && this.empi.direction !== 'LEFT' && this.maze[empiRow][empiCol+1] !== 3){
          //           validPath2.push('RIGHT');
          //       }
          //       if(this.maze[empiRow-1][empiCol] !== 1 && this.empi.direction !== 'DOWN' && this.maze[empiRow-1][empiCol] !== 3){
          //           validPath2.push('UP');
          //       }
          //       if(this.maze[empiRow+1][empiCol] !== 1 && this.empi.direction !== 'UP' && this.maze[empiRow+1][empiCol] !== 3){
          //           validPath2.push('DOWN');
          //       }
                
          //       this.empi.direction = validPath2[Math.floor(Math.random() * validPath2.length)];
          //   };
          //   switch(this.empi.direction){
          //     case 'LEFT':
          //         this.empi.x -= 1;
          //         break;
          //     case 'RIGHT':
          //         this.empi.x += 1;
          //         break;
          //     case 'UP':
          //         this.empi.y -= 1;
          //         break;
          //     case 'DOWN':
          //         this.empi.y += 1;
          //         break;
              
          // };

        
        //this.moveEmp();
        //this.moveEmpi();


console.log('X:' + this.input.activePointer.x);

console.log('Y:' + this.input.activePointer.y);
    },

  moveEmp: function() {
    this.emp.body.velocity.x = 0;
    this.emp.body.velocity.y = 0;

    if (this.controls.left.isDown && !this.controls.right.isDown) {
      this.emp.body.velocity.x = -100;
    }else
    if (this.controls.right.isDown && !this.controls.left.isDown) {
      this.emp.body.velocity.x = 100;
    }

    if (this.controls.up.isDown && !this.controls.down.isDown) {
      this.emp.body.velocity.y = -100;
    } else
    if (this.controls.down.isDown && !this.controls.up.isDown) {
      this.emp.body.velocity.y = 100;
    }

  },


  //movimentação das empilhadoras automaticamente.
  moveEmpi: function() {

// verifica se o enemy está a passar no meio da celula 
// if(Math.floor(this.enemy.x -25)%50 === 0 && Math.floor(this.enemy.y -25)%50 === 0)
// se o valor de x e y arredondado para baixo -25 (metade do tamanho total da celula)
// for divisível por 50(tamanho total da célula), resto zero, então estamos no meio da célula


    // if(Math.floor(this.enemy.x)%50 === 0 && Math.floor(this.enemy.y)%50 === 0){

    // //depois de verificar se o enemy está a passar no meio da célula, verificar qual célula que ele 
    // // está a passar, saber qual a célula em Col e Row.  
    // //Mathfloor arredonda para baixo ex: 25.3 para 25

    //     var enemyCol = (Math.floor(this.enemy.x/50));
    //     var enemyRow = (Math.floor(this.enemy.y/50));
    //     var validPath = [];
        
    //     if(this.maze[enemyRow][enemyCol-1] !== 1 && this.enemy.direction !== 'RIGHT' && this.maze[enemyRow][enemyCol-1] !== 4){
    //         validPath.push('LEFT');
    //     }
    //     if(this.maze[enemyRow][enemyCol+1] !== 1 && this.enemy.direction !== 'LEFT'&& this.maze[enemyRow][enemyCol+1] !== 4){
    //         validPath.push('RIGHT');
    //     }
    //     if(this.maze[enemyRow-1][enemyCol] !== 1 && this.enemy.direction !== 'DOWN' && this.maze[enemyRow-1][enemyCol] !== 4){
    //         validPath.push('UP');
    //     }
    //     if(this.maze[enemyRow+1][enemyCol] !== 1 && this.enemy.direction !== 'UP' && this.maze[enemyRow+1][enemyCol] !== 4){
    //         validPath.push('DOWN');
    //     }
        
    //     this.enemy.direction = validPath[Math.floor(Math.random() * validPath.length)];
    // };
    // switch(this.enemy.direction){
    //     case 'LEFT':
    //         this.enemy.x -= 1;
    //         break;
    //     case 'RIGHT':
    //         this.enemy.x += 1;
    //         break;
    //     case 'UP':
    //         this.enemy.y -= 1;
    //         break;
    //     case 'DOWN':
    //         this.enemy.y += 1;
    //         break;
        
    // };
    
    // if(Math.floor(this.empi.x)%50 === 0 && Math.floor(this.empi.y)%50 === 0){

    //       var empiCol = (Math.floor(this.empi.x/50));
    //       var empiRow = (Math.floor(this.empi.y/50));
    //       var validPath2 = [];
          
    //       if(this.maze[empiRow][empiCol-1] !== 1 && this.empi.direction !== 'RIGHT' && this.maze[empiRow][empiCol-1] !== 3 ){
    //           validPath2.push('LEFT');
    //       }
    //       if(this.maze[empiRow][empiCol+1] !== 1 && this.empi.direction !== 'LEFT' && this.maze[empiRow][empiCol+1] !== 3){
    //           validPath2.push('RIGHT');
    //       }
    //       if(this.maze[empiRow-1][empiCol] !== 1 && this.empi.direction !== 'DOWN' && this.maze[empiRow-1][empiCol] !== 3){
    //           validPath2.push('UP');
    //       }
    //       if(this.maze[empiRow+1][empiCol] !== 1 && this.empi.direction !== 'UP' && this.maze[empiRow+1][empiCol] !== 3){
    //           validPath2.push('DOWN');
    //       }
          
    //       this.empi.direction = validPath2[Math.floor(Math.random() * validPath2.length)];
    //   };
    //   switch(this.empi.direction){
    //     case 'LEFT':
    //         this.empi.x -= 1;
    //         break;
    //     case 'RIGHT':
    //         this.empi.x += 1;
    //         break;
    //     case 'UP':
    //         this.empi.y -= 1;
    //         break;
    //     case 'DOWN':
    //         this.empi.y += 1;
    //         break;
        
    // };
  }
};
