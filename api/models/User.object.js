const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userObj = new Schema ({
    "userObj": {
        "type": "object",
        "properties": {
            "id": {
                "type": "guid",
                "required": true
                },
            "userName": {
                "type": "string",
                "required": true
                },
            "givenName": {
                "type": "string",
                "required": false
            },
            "surName": {
                "type": "string",
                "required": false
            },
            "DOB": {
                "type": "string",
                "required": false
            }
        }
    }
});

const User = mongoose.model("User", userObj);

module.exports = User;