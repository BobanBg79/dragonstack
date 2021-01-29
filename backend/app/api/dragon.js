const { Router } = require("express");
const router = new Router();

router.get("/new", (req, res) => {
  const { generation } = req.app.locals.engine;
  res.json({ dragon: generation.newDragon() });
});

module.exports = router;
