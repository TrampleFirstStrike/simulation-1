let test = "working";


// methods being called
const getShelf = (res, req, next) => {
    const db = req.app.get("db");
};

const getBin = (req, res, next) => {
    const db = req.app.get("db");
};

const updateBin = (req, res, next) => {}

const deleteObj = (req, res, next) => {}

const createObj = (req, res, next) => {}



module.exports = {
    getShelf,

//  test: (req, res, next) => {
//    res.status(200).send(test);
//  }
};