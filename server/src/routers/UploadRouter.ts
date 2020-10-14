import Express from 'express';
import multer from 'multer';
import path from 'path';
const router = Express.Router();

let fileName: string;

const allowFile = ['.jpg', '.png', '.gif', '.jpeg'];

/* 设置存储位置和文件名 */
const storage = multer.diskStorage({
  destination: path.resolve(__dirname, '../public/images'),
  filename(req, file, cb) {
    const ext = path.extname(file.originalname);
    fileName = `${Date.now()}${ext}`;
    cb(null, fileName)
  }
})

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024,
  },
  fileFilter(req, file, cb) {
    const ext = path.extname(file.originalname);
    if (allowFile.includes(ext)) {
      cb(null, true)
    } else {
      cb(new Error('不支持的文件类型'))
    }
  }
}).single('image');

router.post('/', (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      // 发生错误
      res.send(err.message);
      return;
    }
    // 一切都好
    res.send({
      code: 0,
      fileName,
    })
  });
})

export default router;

