let observers = [];

function attach(observer) {
    observers.push(observer);
}

function detach(observer) {
    let newObservers = [];

    for (let i of observers) {
        if (i !== observer) {
            newObservers.push(i);
        }
    }

    observers = newObservers;
}

function notify() {
    for (let i of observers) {
        console.log(i + ": notified");
    }
}

// Observer list
attach("Observer1");
attach("Observer2");
attach("Observer3");

console.log("First Notification:");
notify();

detach("Observer2");

console.log("Second Notification:");
notify();