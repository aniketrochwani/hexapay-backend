import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Address book implementation");
});

app.post("/add-phone-hash-in-db", (req, res) => {
  const phoneHashWithCC = req.body.phoneHashWithCC;
  const phoneHashWithoutCC = req.body.phoneHashWithoutCC;

  // Store these hashes in DB in the public info table
});

app.get("/get-contact-list-info", (req, res) => {
  // take hashes
  // check if hash present in DB (with/without CC)
  // return a new list of contacts
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
