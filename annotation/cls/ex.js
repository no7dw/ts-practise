var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Compact(constructor) {
    console.log("-- decorator function invoked --");
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.gears = 5;
            this.wheels = 3;
        }
    };
}
let Automobile = class Automobile {
    constructor(make) {
        this.wheels = 4;
        console.log("-- this constructor invoked --");
        this.make = make;
    }
};
Automobile = __decorate([
    Compact,
    __metadata("design:paramtypes", [String])
], Automobile);
console.log("-- creating an instance --");
console.log(new Automobile("Nissan"));
