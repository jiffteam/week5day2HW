//exercise 1
let dog = {
    name: "Frisco",
    numLegs: 4
}
//exercise 2
let dog = {
    name: "Frisco",
    numLegs: 4
}
console.log(dog.name)
console.log(dog.numLegs)
//exercise 3
let dog = {
    name: "Frisco",
    numLegs: 4,
    sayLegs: function(){
        return 'This dog has ' + dog.numLegs + ' legs.';
    }
  };
   dog.sayLegs();
//exercise 4
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog.sayLegs();
//exercise 5
function Dog() {
    (this.name = "Jack"), (this.color = "purple"), (this.numLegs = 4);
  }
//exercise 6
function Dog() {
    this.name = "Jack";
    this.color = "purple";
    this.numLegs = 4;
  }
  let hound = new Dog();

//exercise 7
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }
  let terrier = new Dog("Pedro", "Grey");
//exercise 8
function House(numBedrooms){
    this.numBedrooms = numBedrooms;
}
let myHouse = new House(4);
myHouse instanceof House;
//exercise 9
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Pete");
  let ownProps = [];
  // Add your code below this line
  for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }
//exercise 10
function Dog(name){
    thisname = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Scooby")