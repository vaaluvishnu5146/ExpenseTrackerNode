const { checkUserIsAdmin } = require("../../middlewares/AuthMiddleware");
const { getAllPurpose, createAPurpose, updateAPurpose, deleteAPurpose } = require("./purpose.service");

const PurposeRouter = require("express").Router();

////////////////////////
// Create Sub Routes ///
////////////////////////

// Get all purpose
PurposeRouter.get("/", getAllPurpose)
// Get a purpose by id
PurposeRouter.get("/:purposeId", getAllPurpose)
// Create a purpose
PurposeRouter.post("/create", checkUserIsAdmin, createAPurpose)
// Update a purpose
PurposeRouter.patch("/update/:purposeId", checkUserIsAdmin, updateAPurpose)
// Delete a purpose
PurposeRouter.delete("/delete/:purposeId", checkUserIsAdmin, deleteAPurpose)


module.exports = PurposeRouter;