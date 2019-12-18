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
    return function (target, propertyKey, descriptor) {
        let originalMethod = descriptor.value;
        //wrapping the original method
        descriptor.value = function (...args) {
            console.log("wrapped function: before invoking " + propertyKey);
            let result = originalMethod.apply(this, args);
            listener.onPostWork(result);
            console.log("wrapped function: after invoking " + propertyKey);
            return result;
        };
    };
}
class MyListener {
    onPostWork(result) {
        console.log("MyListener#onPostWork: " + result);
    }
}
class TaskRunner {
    runTask(taskName) {
        console.log("runTask invoked: " + taskName);
        return "the task result";
    }
}
__decorate([
    Listener(new MyListener()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], TaskRunner.prototype, "runTask", null);
console.log("-- creating an instance --");
let taskRunner = new TaskRunner();
console.log("-- invoking TaskRunner --");
let output = taskRunner.runTask("task input");
console.log(output);
