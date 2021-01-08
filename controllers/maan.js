const Maan = require("../models/maan")
// const nodeMaan = require("/node-api/maan")




exports.getMaan = (req, res) => {
  

    res.send({
        prime: [
            {category: "Input M here"},
            {category: "Input A here"},
            {category: "Input Ap here"},
            {category: "Input N here"}
        ]

    });
};

exports.postMaan = (req, res) => {
    const post = new Maan(req.body)
    console.log("CREATING MAAN: ", req.body)
}