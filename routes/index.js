var express = require("express");
var router = express.Router();
const uniqid = require("uniqid");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

router.post("/upload", async (req, res) => {
    console.log("in /upload route")
  const photoPath = `./tmp/${uniqid()}.jpg`;
  // console.log('photofromfront:',req.files.photoFromFront)
  //const resultMove = await req.files.photoFromFront.mv(photoPath);
  if (!resultMove) {
    console.log("res move", resultMove)
    const resultCloudinary = await cloudinary.uploader.upload(req.files.photoFromFront.uri);
    console.log("resultCloudinary",resultCloudinary)
    fs.unlinkSync(photoPath);
    res.json({ result: true, url: resultCloudinary.secure_url });
  } else {
    res.json({ result: false, error: resultMove });
  }
});

module.exports = router;
