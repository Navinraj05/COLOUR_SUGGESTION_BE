const express = require("express"); 
const UserRoutes = require ("./user.js");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send(`
    <h1 style="text-align:center">Welcome to Backend of Dress colour suggrstion</h1>`);
});
router.use("/", UserRoutes);

module.exports = router;