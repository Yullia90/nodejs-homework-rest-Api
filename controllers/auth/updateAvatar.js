const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");
const { User } = require("../../models/user");
// const { cloudinary } = require("../../helpers/index");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

// Зберігаємо файли в папці

const updateAvatar = async (req, res) => {
  const { path: tmpUpload, originalname } = req.file;

  await Jimp.read(tmpUpload).then((imageProcessing) => {
    imageProcessing.resize(250, 250).writeAsync(tmpUpload);
  });

  const { _id: id } = req.user;
  const imageName = `${id}_${originalname}`;
  try {
    const resultUpload = path.join(avatarDir, imageName);
    await fs.rename(tmpUpload, resultUpload);
    const avatarURL = path.join("avatars", imageName);
    await User.findByIdAndUpdate(req.user._id, { avatarURL });
    res.json({ avatarURL });
  } catch (error) {
    await fs.unlink(tmpUpload);
    throw error;
  }
};

// Як в лекції
// const avatarPath = path.resolve("public", "avatars");

// const updateAvatar = async (req, res) => {
//     const { _id } = req.user;
//     const { path: oldPath, filename } = req.file;
//     const newPath = path.join(avatarPath, filename);

//     await fs.rename(oldPath, newPath);
//     const avatar = path.join("public", "avatars", filename);
//     const result = await User.create({ ...req.body, avatar, _id });

//     res.status(201).json(result);
// };

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
