function Compact<T extends { new(...args: any[]): {} }>(constructor: T) {
    console.log("-- decorator function invoked --");
    return class extends constructor {
        gears: number = 5;
        wheels: number = 3;
    }
}

@Compact
class Automobile {
    make: string;
    wheels: number = 4;
    constructor(make: string) {
        console.log("-- this constructor invoked --");
        this.make = make;
    }
}

console.log("-- creating an instance --");
console.log(new Automobile("Nissan"));
