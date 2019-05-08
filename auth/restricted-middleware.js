const jtw = require("jsonwebtoken");
const secrets = require("../config/secrets.js");

module.exports = (req, res, next) => {
  jwt.verify(token, secrets, (err, decodedToken) => {
    if (err) {
      res.status(401).json({ you: "no pass" });
    } else {
      req.decodedToken = decodedToken;
      next();
    }
  });

  const { username, password } = req.headers;

  if (username && password) {
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          next();
        } else {
          res.status(401).json({ message: "Invalid Credentials" });
        }
      })
      .catch(error => {
        res.status(500).json({ message: "Ran into an unexpected error" });
      });
  } else {
    res.status(400).json({ message: "No credentials provided" });
  }
};
