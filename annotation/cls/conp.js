var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Listener(listener) {
    return function (constructorFunction) {
        //new constructor function
        let newConstructorFunction = function (...args) {
            console.log("before invoking: " + constructorFunction.name);
            let func = function () {
                return new constructorFunction(...args);
            };
            func.prototype = constructorFunction.prototype;
            let result = new func();
            console.log("after invoking: " + constructorFunction.name);
            listener.onPostWork(result);
            return result;
        };
        newConstructorFunction.prototype = constructorFunction.prototype;
        return newConstructorFunction;
    };
}
class MyObjectListener {
    onPostWork(obj) {
        console.log("Object created: " + JSON.stringify(obj));
    }
}
let TaskRunner = class TaskRunner {
    constructor(taskName) {
        this.taskName = taskName;
    }
};
TaskRunner = __decorate([
    Listener(new MyObjectListener()),
    __metadata("design:paramtypes", [String])
], TaskRunner);
console.log("creating an instance");
let taskRunner = new TaskRunner("test");
