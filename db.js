const m = require('mongoose');

const CONNECTION_URI = `mongodb://localhost:27017/expensetracker`;

(() => {
    m.connect(CONNECTION_URI).then((result) => {
        if(result) {
            console.log("Mongodb connection successfull");
        }
    }).catch((error) => {
        console.log(error)
    })
})();