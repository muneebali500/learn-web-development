const jwt = require(`jsonwebtoken`);
const { BadRequestError } = require("../errors");

function login(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError(`Please provide your email and password`);
  }

  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: `30d`,
  });

  res.status(200).json({ msg: `user created`, token });
}

function dashboard(req, res) {
  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `your lucky number is ${Math.floor(Math.random() * 1000)}`,
  });
}

module.exports = { login, dashboard };
