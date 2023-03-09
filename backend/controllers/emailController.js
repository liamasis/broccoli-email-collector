const asyncHandler = require("express-async-handler");

const Email = require("../models/emailModel");

// @desc    Get Emails
// @route   GET /api/Emails
// @access  Private
const getEmails = asyncHandler(async (req, res) => {
  const emails = await Email.find();

  res.status(200).json(emails);
});

// @desc    Set Emails
// @route   POST /api/Emails
// @access  Private
const setEmails = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    console.log(req.body.name);
    throw new Error("Please add a text file");
  }
  const email = await Email.create({
    name: req.body.name,
    address: req.body.address,
  });
  res.status(200).json(email);
});
// @desc    Update Emails
// @route   PUT /api/Emails
// @access  Private
const updateEmails = asyncHandler(async (req, res) => {
  const email = await Email.findById(req.params.id);

  if (!email) {
    res.status(400);
    throw new Error("Email not found");
  }

  const updatedEmail = await Email.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedEmail);
});
// @desc    Delete Emails
// @route   DELETE /api/Emails
// @access  Private
const deleteEmails = asyncHandler(async (req, res) => {
  const email = await Email.findById(req.params.id);

  if (!email) {
    res.status(400);
    throw new Error("Email not found");
  }
  const deletedEmail = await Email.findByIdAndDelete(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({ message: `Delete email ${deletedEmail}` });
});

module.exports = {
  getEmails,
  setEmails,
  deleteEmails,
  updateEmails,
};
