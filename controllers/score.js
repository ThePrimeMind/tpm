// const _ = require("lodash");
// const User = require("../models/user");
// const formidable = require("formidable");
// const fs = require("fs");


// exports.score = (req, res, next) => {
//     let form = new formidable.IncomingForm();
//     form.keepExtensions = true;
//     form.parse(req, (err, fields, files) => {
//         if(err) {
//             return res.status(400).json({
//                 error: "M-A-A-N Score could not be issued..."
//             });
//         }
//         //save user
//         let score = req.name;
//         score = _.extend(score, fields);
//         user.updated = Date.now();

//         then()

//         user.save((err, result) => {
//             if(err) {
//                 return res.status(400).json({
//                     error: err
//                 });
//             }
//             res.json(score);
//         });
//     });
// };

