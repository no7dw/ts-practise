function SelfDriving(constructorFunction: Function) {
    console.log('-- decorator function invoked --');
    constructorFunction.prototype.selfDrivable = true;
}

@SelfDriving
class Car {
    private _make: string;
    constructor(make: string) {
        console.log('-- this constructor invoked --');
        this._make = make;
    }
}
console.log('-- creating an instance --');
let car: Car = new Car("Nissan");
console.log(car);
console.log(`selfDriving: ${car['selfDrivable']}`);

