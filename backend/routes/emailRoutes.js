const express = require("express");
const router = express.Router();
const {
  getEmails,
  setEmails,
  deleteEmails,
  updateEmails,
} = require("../controllers/emailController");

router.route("/").get(getEmails).post(setEmails);
router.route("/:id").delete(deleteEmails).put(updateEmails);

module.exports = router;
