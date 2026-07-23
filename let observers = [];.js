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
        console.log(i + ": no");
    }
}

attach("A")
attach("B")
notify()
attach("C")
detach("B")
notify()