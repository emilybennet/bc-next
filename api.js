const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.json({
    sponsorBadges: {
      bronze: 0.47,
      silver: 0.52,
      gold: 0.85,
      diamond: 1
    }
  });
});

module.exports = router;
