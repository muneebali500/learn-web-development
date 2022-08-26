const EventEmitter = require(`events`);

const customEmitter = new EventEmitter();

customEmitter.on(`response`, (name, id) => {
  console.log(`first event called named as ${name} with id: ${id}`);
});

customEmitter.on(`response`, () => {
  console.log(`second event called`);
});

customEmitter.emit(`response`, `john`, 32);
