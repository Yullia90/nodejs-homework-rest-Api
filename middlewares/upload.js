const multer = require("multer");
const path = require("path");
const { HttpError } = require("../helpers/index");

const destination = path.resolve("temp");
const storage = multer.diskStorage({
    destination,
    filename: (req, file, callback) => {
        const uniquePrefix = `${Date.now()}_${Math.round(Math.random() * 1E9)}`;
        const filename = `${uniquePrefix}_${file.originalname}`;
        callback(null, filename);
    }
});

const limits = {
    fileSize: 1024 * 1024 * 5,
};

const fileFilter = (req, file, callback) => {
    const extention = req.originalname.split(".").pop();
    if (extention === "exe") {
        callback(HttpError(400, ".exe not valid extention"));
    }
}

const upload = multer({
    storage,limits,fileFilter,
})

module.exports = upload;
//