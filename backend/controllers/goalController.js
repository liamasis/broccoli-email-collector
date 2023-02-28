const asyncHandler = require("express-async-handler");
// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get bread" });
});

// @desc    Set Goals
// @route   POST /api/goals
// @access  Private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text file");
  }
  res.status(200).json({ message: "get milk" });
});
// @desc    Update Goals
// @route   PUT /api/goals
// @access  Private
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});
// @desc    Delete Goals
// @route   DELETE /api/goals
// @access  Private
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  deleteGoals,
  updateGoals,
};
