function Listener<I extends ObjectListener<any>>(listener: I) {

    return function <T extends { new(...constructorArgs: any[]) }>(constructorFunction: T) {
        //new constructor function
        let newConstructorFunction: any = function (...args) {
            console.log("before invoking: " + constructorFunction.name);
            let func: any = function () {
                return new constructorFunction(...args);
            }
            func.prototype = constructorFunction.prototype;
            let result: any = new func();
            console.log("after invoking: " + constructorFunction.name);
            listener.onPostWork(result);
            return result;
        }
        newConstructorFunction.prototype = constructorFunction.prototype;
        return newConstructorFunction;
    }
}

interface ObjectListener<T> {
    onPostWork(t: T): void;

}
class MyObjectListener implements ObjectListener<any>{
    onPostWork(obj: any) {
        console.log("Object created: " + JSON.stringify(obj));
    }
}

@Listener(new MyObjectListener())
class TaskRunner {
    taskName: string;
    constructor(taskName: string) {
        this.taskName = taskName;
    }
}
console.log("creating an instance");

let taskRunner = new TaskRunner("test");
