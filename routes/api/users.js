const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const gravatar = require("gravatar");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../../middlewere/authMiddlewere");
const multer = require("multer");

//route GET api/users
//access public
router.get("/", (req, res) => res.send("user route"));

//route POST
router.post(
  "/",
  [
    check("name", "name is required").not().isEmpty(),
    check("password", "password must be 5 characters min ").isLength({
      min: 5,
    }),
    check("email", "email must be valid").isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "user already exists" }] });
      }
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });
      user = new User({
        name,
        email,
        avatar,
        password,
      });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);

const upload = multer({
  limits: {
    fileSize: 2000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return cb(new Error("please upload image file"));
    }
    cb(undefined, true);
  },
});

//PUT update avatar
//private
router.post(
  "/avatar",
  auth,
  upload.single("avatar"),
  async (req, res) => {
    try {
      let file = req.file.buffer;
      let user = await User.findById(req.user.id);
      user.avatarBuff = file;
      user.avatar = `http://localhost:5000/api/users/${req.user.id}/avatar?${
        Math.random() * 100
      }`;
      await user.save();
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }, //handle errors
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

router.get("/:id/avatar", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      throw new Error();
    }

    res.set("Content-Type", "image/jpeg");
    res.send(user.avatarBuff);
  } catch (err) {
    res.status(404).send();
  }
});

module.exports = router;
