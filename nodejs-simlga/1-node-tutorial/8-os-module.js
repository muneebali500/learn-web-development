const os = require("os");

// getting info about user
const user = os.userInfo();
console.log(user);

// method returns system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};

console.log(currentOS);
