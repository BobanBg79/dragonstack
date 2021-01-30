const { Router } = require("express");
const router = new Router();

router.get("/", (req, res) => {
  const { generation } = req.app.locals.engine;
  res.json({ generation });
});

module.exports = router;
