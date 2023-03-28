const mongoose = require("mongoose");


const messageSchema = new mongoose.Schema({
	Title: { type: String, 
        required: true 
    },
	desc: { type: String, 
        required: true 
    },
});


module.exports = mongoose.model("Message", messageSchema);