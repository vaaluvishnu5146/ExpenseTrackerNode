// Import dependencies
const Express = require("express");
// Create HTTP server
const HTTPServer = Express();
// Start ad listen to the incoming request
HTTPServer.listen(3000, "localhost", (error) => {
    if(error) {
        console.log("Error", error)
    } else {
        console.log("Server started")
    }
})

/**
 * Path = http://localhost:3000/
 */
HTTPServer.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Server working successfully"
    });
})