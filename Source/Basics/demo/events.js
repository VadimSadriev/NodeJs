const EventEmmiter = require('events');

// const emitter = new EventEmmiter();

// emitter.on('anything', data => {
//      console.log('On: anything', data);
// });

// emitter.emit('anything', {a: 1});

// emitter.emit('anything', {a: 2});

// emitter.emit('anything', {a: 3});

// setTimeout(() => {
//     emitter.emit('anything', {c: 4})
// }, 1500);

class Dispatcher extends EventEmmiter{
    subscribe(eventName, callback) {
        console.log('subscribe...');
        this.on(eventName, callback);
    }
    dispatch(eventName, data){
        console.log('dispatching...');
        this.emit(eventName, data);
    }
}

const dispatcher = new Dispatcher();

dispatcher.subscribe('aa', data => {
    console.log('aa', data);
})

dispatcher.dispatch('aa', {aa: 22});
