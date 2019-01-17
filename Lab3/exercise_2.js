const EventEmitter = require('events');
//console.log(EventEmitter);

class Gym extends EventEmitter {
    constructor() {
        super();
    }
    goToGym(message)  {
        this.message = message;
        setInterval(() => this.emit('data', this.message), 1000);
    }
}

const gym = new Gym();
// gym.on('data', (message) => {
//     console.log(`${message}`);
// });
// gym.goToGym('Athlete is working out.');

gym.on('data', function(message){
    console.log(`${message}`);
});
gym.goToGym('Athlet is working out');