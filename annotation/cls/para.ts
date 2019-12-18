function Wheels(numOfWheels: number) {
    console.log('-- decorator factory invoked --');
    return function (constructor: Function) {
        console.log('-- decorator invoked --');
        constructor.prototype.wheels = numOfWheels;
    }
}

@Wheels(4)
class Vechical {
    private _make: string;
    constructor(make: string) {
        console.log('-- this constructor invoked --');
        this._make = make;
    }
}

console.log('-- creating an instance --');

let vechical: Vechical = new Vechical("Nissan");
console.log(vechical);

console.log(vechical['wheels']);
