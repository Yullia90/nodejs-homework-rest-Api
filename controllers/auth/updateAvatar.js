const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");
const { User } = require("../../models/user");
// const { cloudinary } = require("../../helpers/index");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

// Зберігаємо файли в папці
const updateAvatar = async (req, res) => {
    const { _id } = req.user;
    const { path: tempUpload, originalname } = req.file;
    const filename = `${_id}_${originalname}`;

    const resultUpload = path.join(avatarDir, filename);

    Jimp.read(tempUpload, (err, img) => {
        if (err) throw err;
        img.resize(250, 250).write(resultUpload);
    });
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join("avatars", filename);

    await User.findByIdAndUpdate(_id, { avatarURL });

    res.json({ avatarURL });
 };

// Зберігаємо файли в хмарі
//  const updateAvatar = async (req, res) => {
//      const { _id } = req.user;
//      const {url:avatar} = await cloudinary.uploader.upload(req.file.path, {
//          folder:"avatars",
//      })
//      await fs.unlink(req.file.path);
//      const result = await User.create({ ...req.body, avatar, _id });
//      res.status(201).json(result);
//  };

module.exports = updateAvatar;