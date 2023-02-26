
// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req, res) => {
    res.status(200).json({ message: 'get bread' });
};

// @desc    Set Goals
// @route   POST /api/goals
// @access  Private
const setGoals = (req, res) => {
    res.status(200).json({ message: 'get milk' });
};
// @desc    Update Goals
// @route   PUT /api/goals
// @access  Private
const updateGoals = (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` });
};
// @desc    Delete Goals
// @route   DELETE /api/goals
// @access  Private
const deleteGoals = (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = {
    getGoals,
    setGoals,
    deleteGoals,
    updateGoals,
};