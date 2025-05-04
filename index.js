// Import dependencies
const Express = require("express");
require("./db");
const PurposeRouter = require("./modules/purpose/purpose.controller");
const MediumRouter = require("./modules/medium/medium.controller");
const ExpenseRouter = require("./modules/transactions/expense.controller");
const AuthenticationRouter = require("./modules/accounts/authentication.controller");


// Create HTTP server
const HTTPServer = Express();

// Middlewares
HTTPServer.use(Express.json());

// Start ad listen to the incoming request
HTTPServer.listen(3000, "localhost", (error) => {
    if(error) {
        console.log("Error", error)
    } else {
        console.log("Server started")
    }
})

// Inject Routers to Server
HTTPServer.use("/v1/purpose", PurposeRouter);
HTTPServer.use("/v1/medium", MediumRouter);
HTTPServer.use("/v1/expense", ExpenseRouter);
HTTPServer.use("/v1/authentication", AuthenticationRouter);


/**
 * Path = http://localhost:3000/
 */
HTTPServer.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Server working successfully"
    });
})