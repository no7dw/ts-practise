function log<T extends { new(...constructorArgs: any[]) }>(constructorFunction: T) {

    //new constructor function
    let newConstructorFunction: any = function (...args) {
        console.log("before invoking: " + constructorFunction.name);
        let func: any = function () {
            return new constructorFunction(...args);
        }
        func.prototype = constructorFunction.prototype;
        let result: any = new func();
        console.log("after invoking: " + constructorFunction.name);
        console.log('object created: ' + JSON.stringify(result));
        return result;
    }
    newConstructorFunction.prototype = constructorFunction.prototype;
    return newConstructorFunction;
}

@log
class Task {
    taskName: string;
    constructor(taskName: string) {
        console.log('this constructor invoked');
        this.taskName = taskName;
    }
}
console.log("creating an instance");

let task = new Task("test");
console.log('task created: ' + JSON.stringify(task));
