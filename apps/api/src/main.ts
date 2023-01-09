import * as express from "express";
import * as path from "path";
import bcrypt = require("bcrypt");
import jwt = require("jsonwebtoken");
import { check, validationResult } from "express-validator";
import * as users from "./mock/users.json";
import "dotenv";
import bodyParser = require("body-parser");

const app = express();

app.use("/assets", express.static(path.join(__dirname, "assets")));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/api", (req, res) => {
  res.send({ message: "Welcome to api 123!" });
});

app.post(
  "/api/login",
  [
    check("email").exists().withMessage("Email is required"),
    check("password").exists().withMessage("Password is required"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = users.find((u) => u.email === req.body.email);
    if (!user) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Account information incorrect" }] });
    }

    bcrypt.compare(req.body.password, user.password_hash, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ errors: [{ msg: "Server error" }] });
      }
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Account information incorrect" }] });
      }

      const payload = {
        user: {
          email: user.email,
          username: user.name,
        },
      };

      jwt.sign(
        payload,
        process.env.NX_JWT_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) {
            return res.status(500).json({ errors: [{ msg: "Server error" }] });
          }
          res.status(200).json({ accessToken: token, name: user.name });
        }
      );
    });
  }
);

const port = process.env.NX_port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on("error", console.error);
