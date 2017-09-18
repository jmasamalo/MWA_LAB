class Car{
    constructor(public name:string, public acceleration:number =0) {
        this.name = name;
        this.acceleration = acceleration;
    }

    honk():void{
        console.log(`${this.name} is saying: Tooooooooot!`);
    }

    accelerate(speed:number):void{
        this.acceleration += speed;
    }
}

var car:Car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);