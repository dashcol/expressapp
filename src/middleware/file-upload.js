import path from 'path';
import multer from 'multer';

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/images/");
    },
    filename:(req,file,cb)=>{
        const name=Date.now()+'-'+file.originalname;
        cb(null,name);
    }

})
const upload = multer({ storage: storage });

export default upload