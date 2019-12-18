function Listener(listener: MethodListener<any>) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        let originalMethod = descriptor.value;
        //wrapping the original method
        descriptor.value = function (...args: any[]) {
            console.log("wrapped function: before invoking " + propertyKey);
            let result = originalMethod.apply(this, args);
            listener.onPostWork(result);
            console.log("wrapped function: after invoking " + propertyKey);
            return result;
        }
    }
}

interface MethodListener<T> {
    onPostWork(result: T): void;
}

class MyListener implements MethodListener<any> {
    onPostWork(result: any): void {
        console.log("MyListener#onPostWork: " + result);
    }
}

class TaskRunner {
    @Listener(new MyListener())
    runTask(taskName: string): any {
        console.log("runTask invoked: " + taskName);
        return "the task result"
    }
}

console.log("-- creating an instance --");
let taskRunner = new TaskRunner();
console.log("-- invoking TaskRunner --");
let output = taskRunner.runTask("task input");
console.log(output);
