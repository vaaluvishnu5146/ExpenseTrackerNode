const { getAllPurpose, createAPurpose } = require("./purpose.service");

const PurposeRouter = require("express").Router();

////////////////////////
// Create Sub Routes ///
////////////////////////

// Get all purpose
PurposeRouter.get("/", getAllPurpose)
// Get a purpose by id
// Create a purpose
PurposeRouter.post("/create", createAPurpose)
// Update a purpose
// Delete a purpose

module.exports = PurposeRouter;