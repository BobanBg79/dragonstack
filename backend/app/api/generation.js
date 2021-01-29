const { Router } = require("express");
const router = new Router();

router.get("/", (req, res) => {
  console.log(999999);
  const { generation } = req.app.locals.engine;
  res.json({ generation });
});

module.exports = router;
