//Constructor function

var Car = function(maxSpeed , driver){
  this.maxSpeed = maxSpeed ;
  this.driver = driver ;
  this.drive = function(speed , time){
    return (speed*time);
  };
  this.test = function(){
    console.log("Driver is " + this.driver);
  };
};

var newCar1 = new Car(50,"sample1");
var newCar2 = new Car(70,"sample2");
console.log(newCar1.test());
console.log(newCar2.test());
console.log(newCar1.maxSpeed);
console.log(newCar2.maxSpeed);
