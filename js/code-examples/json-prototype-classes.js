// JSON ~ singleton (o singura instanta a unui obiect)

var Factory = {
    name: 'Tesla',
    address: 'Olanda, Amsterdam, str. XXX 23',
    program: '9:00 - 18:00',
    getInfo: function(){
        return 'Welcome to ' + this.name + '. ' +
            'Our address: ' + this.address + '. ' +
            'Working hours: ' + this.program;
    },
    canIBuy: function(ownMoney) {
        return ownMoney >= 100000;
    },
    service: function(myCar) {
        // TODO fix myCar
        myCar.weels = 4;
        return myCar;
    }
};
Factory.getInfo();
Factory.canIBuy(90000);
var myCar = {owner: 'Matei', weels: 3};
console.info(myCar);
myCar = Factory.service(myCar);
console.info(myCar);




// Prototype
function Car(options) {
    this.name = options.name;
    this.doors = options.doors;
}
Car.prototype.start = function(){
    return 'Starting... ' + this.name;
};

function BMW(options) {
    Car.call(this, options); // step 1
    this.color = options.color;
}
BMW.prototype = Object.create(Car.prototype); // step 2
BMW.prototype.constructor = BMW; // step 3

BMW.prototype.fly = function() {
    return '"I Believe I can fly", says: ' + this.name;
};

var myCar = new Car({name: "Ford", doors: 4});
var andreisCar = new Car({name: "Dacia", doors: 5});
var davidsCar = new BMW({name: 'BMW 5', doors: 4, color: 'blue'});

myCar.start();
davidsCar.start();


// classes ES6

class Game {
    constructor(options) {
        this.name = options.name;
    }
    start() {
        var s = 'Starting... ' + this.name;
        console.info(s);
        return s;
    }
}
class Puzzle extends Game {
    constructor(options) {
        super(options);
        this.pieces = options.pieces;
    }
    shuffle() {
        var s = 'Shuffling... ' + this.pieces + ' pieces';
        console.info(s);
        return s;
    }
    start() {
        this.shuffle();
        super.start();
    }
}

var game = new Game({name: 'transformers'});
var nfs = new Game({name: 'Need for Spped'});
var n16 = new Puzzle({name: '15 numere si unul lipsa', pieces: 16});

nfs.start();
n16.start();
