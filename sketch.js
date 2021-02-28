
var paddle1, paddle2, ball

var paddle1Score = 0;
var paddle2Score = 0;
var gameState = "serve";


    



function setup() {
  createCanvas(800,400);
  
  
  paddle1 = createSprite(780, 200, 15, 50);
  paddle1.shapeColor = "black";
  paddle2 = createSprite(20, 200, 15, 50);
  paddle2.shapeColor = "black";
  ball = createSprite(400, 200, 15, 15)
}

function draw() {
  background(255,255,255);  

  text(paddle2Score, 10,20);
text(paddle1Score, 390,390);

if (gameState === "serve") {
    text("Press Space to Serve",150,180);
  }


if (keyDown("space") &&  gameState === "serve") {
    serve();
    gameState = "play";
}
  
  
  if(keyDown(UP_ARROW)){
    paddle1.velocityY = 6

  }

  if(keyDown(DOWN_ARROW)){
    paddle1.velocityY = -6
    
  }

  if(keyDown(W)){
    paddle2.velocityY = 6
    
  }

  if(keyDown(S)){
    paddle2.velocityY = -6
    
  }
  createEdgeSprites();
  ball.bounceOff(paddle1);
  ball.bounceOff(paddle2);
  ball.bounceOff(upEdge);
  ball.bounceOff(downEdge);
  paddle1.collide(edges);
  
    
  
  if (keyDown("r") && gameState === "over") {
      gameState = "serve"; 
      computerScore = 0;
      playerScore = 0;
    }
  
    if (paddle1Score === 5 || paddle2Score === 5){
      gameState = "over";
      text("Game Over!",170,160);
      text("Press 'R' to Restart",150,180);
    }
  
  if(ball.y<0 || ball.y>400){
    gameState="serve";
    reset();
  }
  
  paddle1.display
  paddle2.display
  drawSprites();  
  }
  
  
  function serve() {
    ball.velocityX = 3;
    ball.velocityY = 4;
  }
  
  
  function reset(){
    ball.x = 400;
    ball.y = 200;
    ball.velocityX = 0;
    ball.velocityY = 0;
  }


  
  
