const Store = require("../models/StoreModel");
const { body, validationResult } = require("express-validator");

// Helpers to prepare response
const apiResponse = require("../helpers/apiResponse");

exports.addStore = [
    (req, res) => {
        try {
            // Errors empty for now, add validation/sanitation later
            let errors = [];
            if (errors.length) {
                // Validation Error has occured
                apiResponse.validationErrorWithData(res, "fail", {});
            } else {
                // NO validation error, continue
                // apiResponse.successResponse(res, "Success");
                let store = new Store({
                    _id: req.body._id,
                    name: req.body.name,
                    region: req.body.region,
                    ship_address: req.body.ship_address,
                    ship_city: req.body.ship_city,
                    ship_state: req.body.ship_state,
                    ship_zip: req.body.ship_zip,
                    is_hosting: req.body.is_hosting,
                    latitude: req.body.latitude,
                    longitude: req.body.longitude
                });

                // Check store mongoose object
                console.log("Mongoose object: ", store);

                store.save(function(err) {
                    if (err) {
                        return apiResponse.ErrorResponse(res, err);
                    }

                    let storeData = {
                        _id: store._id,
                        name: store.name,
                        region: store.region,
                        ship_address: store.ship_address,
                        ship_city: store.ship_city,
                        ship_state: store.ship_state,
                        ship_zip: store.ship_zip,
                        is_hosting: store.is_hosting,
                        latitude: store.latitude,
                        longitude: store.longitude
                    };

                    apiResponse.successResponseWithData(
                        res,
                        "Store Added",
                        storeData
                    );
                });
            }
        } catch (err) {
            console.log(err);
        }
    }
];
