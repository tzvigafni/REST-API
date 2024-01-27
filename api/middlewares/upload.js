const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
cb(null, 'uploads/')
    },
    filename: (req, file, cb) =>{
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const fileFilter = (req, file, cd) => {
    if (file.minetype === 'image/jpeg' || file.minetype === 'image/png') {
        cd(null, true);
    }
    cd(null, false);
};

const upload = multer({
    // dest: 'uploads/',
    storage,
    limits: {
        fieldSize: 1024 * 1024 * 2
    },
    fileFilter
});

module.exports = upload;