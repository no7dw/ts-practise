var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Wheels(numOfWheels) {
    console.log('-- decorator factory invoked --');
    return function (constructor) {
        console.log('-- decorator invoked --');
        constructor.prototype.wheels = numOfWheels;
    };
}
let Vechical = class Vechical {
    constructor(make) {
        console.log('-- this constructor invoked --');
        this._make = make;
    }
};
Vechical = __decorate([
    Wheels(4),
    __metadata("design:paramtypes", [String])
], Vechical);
console.log('-- creating an instance --');
let vechical = new Vechical("Nissan");
console.log(vechical);
console.log(vechical['wheels']);
