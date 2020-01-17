const express = require('express')
const router = express.Router()
const multer = require('multer')
var ffmpeg = require("fluent-ffmpeg")

let storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "uploads/")
    },
    filename: (req, file, cb) =>{
        cb(null, `${Date.now()}_${file.originalname}`)

    },
    fileFilter: (req, file, cb) =>{
        const ext = path.extname(file.originalname)
        if(!ext === '.mp4'){
            return cb(res.status(400).end('only mp4 is allowed'), false)
        }
        cb(null,true)
    }
})

const upload = multer({storage: storage}).single("file");

router.post('/uploadfiles',(req,res) =>{
   // 비디오 서버에 저장
   upload(req, res, err => {
       if(err){
           return res.json({ success: false, err})
       } 
       return res.json({ success: true, url: res.req.file.path, fileName: res.req.file.filename})
   })
})

router.post('/thumbnail',(req,res) =>{
    //썸네일 생성 비디오 러닝타임가져오기 
    //비디오 정보 가져오기
    let filePath = ""
    let fileDuration = ""
    ffmpeg.ffprobe(req.body.url, function(err, metadata){
        fileDuration = metadata.format.duration 
    })
     
    //썸네일생성
    ffmpeg(req.body.url)
    .on('filenames', function (filenames){
        console.log('will generate' + filenames.join(','))
        console.log(filenames)

        filePath = "uploads/thumbnails/" +filenames[0];
    })
    .on('end', function(){
        console.log('Screenshots taken')
        return res.json({
            success: true,
            url: filePath,
            fileDuration: fileDuration,
        })
    })
    .on('error', function (err){
        console.error(err)
        return ({
            success: false, err
        })
    })
    .screenshots({
        count: 3,
        folder:'uploads/thumbnails',
        size:'320x240',
        filename:'thumbnail-%b.png'
    })
})

module.exports = router;