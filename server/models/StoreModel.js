var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Store = new Schema(
    {
        _id: { type: Number, required: true },
        name: { type: String, required: true },
        region: { type: String, required: true },
        ship_address: { type: String, required: true },
        ship_city: { type: String, required: true },
        ship_state: { type: String, required: true },
        ship_zip: { type: String, required: true },
        is_hosting: { type: Boolean, required: true },
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
        // user: { type: Schema.ObjectId, ref: "User", required: true },
    },
    { _id: false }
);

module.exports = mongoose.model("Store", Store);
