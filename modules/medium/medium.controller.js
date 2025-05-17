const { checkUserIsAdmin } = require("../../middlewares/AuthMiddleware");
const { getAllMedium, createAMedium } = require("./medium.services");

const MediumRouter = require("express").Router();

// Get all medium
MediumRouter.get('/', getAllMedium);
// Get a medium by id
// Create a medium
MediumRouter.post('/create', checkUserIsAdmin, createAMedium);
// Update a medium
// Delete a medium

module.exports = MediumRouter;