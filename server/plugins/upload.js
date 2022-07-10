const multer = require("multer");
const { resolve } = require("path");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // 存放路径
        cb(null, resolve(__dirname, "../uploads"));
    },
    filename: function (req, file, cb) {
        // 命名文件名
        const random = (Math.random() * 1000000).toString().substring(0, 5);
        cb(
            null,
            "file" +
                Date.now() +
                "-" +
                random +
                "." +
                file.mimetype.match(/\/([a-z]+)$/i)[1]
        );
    },
});

const upload = multer({ storage });

module.exports = upload;
