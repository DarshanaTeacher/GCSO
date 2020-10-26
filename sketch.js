var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);

  //generates random speed and weight for car
  speed = random(55, 90);
  weight = random(400, 1500);
  
  //create car
   car = createSprite(50, 200, 50, 50);

   //create wall
   wall = createSprite(1500, 200, 60, height/2);
   wall.shapeColor = "rgb(80, 80, 80)"
}

function draw() {
  background(255,255,255);  

  //assign velocity to the car
  car.velocityX = speed;

  //Detect the collision of the car with the wall
  if(wall.x - car.x < wall.width/2 + car.width/2)
  {
      car.velocityX = 0;
      
      car.x = wall.x - car.width/2 - wall.width/2;
      car.y = height/2;
      deformation = 0.5 * weight * speed * speed/22500;
      if(deformation < 100)
      {
        car.shapeColor = "rgb(0, 255, 0)";
      }else if(100 < deformation < 180)
            {
              car.shapeColor = "rgb(230, 230, 0)";
            }else if( deformation > 180)
            {
              car.shapeColor = "rgb(255, 0, 0)"
            }
  }
  drawSprites();
}