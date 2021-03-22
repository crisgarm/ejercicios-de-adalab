const express = require("express");
const cors = require("cors");
const users = require("./data.json");

// create app server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

app.get("/users/all", (req, res) => {
  res.json(users);
});

app.get("/users/:userId/orders/:orderId", (req, res) => {
  console.log("Url params:", req.params);
  console.log("Url param userId:", req.params.userId);
  console.log("Url param orderId", req.params.orderId);

  // find user by userId and orderId
  const user = users.find(
    (user) =>
      user.userId === req.params.userId &&
      user.orderId.find((order) => order === req.params.orderId)
  );
  console.log("Found user:", user);

  // response with selected user data or error
  if (user === undefined) {
    res.json({ error: "user-not-found" });
  } else {
    const result = {
      userId: user.userId, //req.params.userId
      orderId: req.params.orderId,
    };
    res.json(result);
  }
});
