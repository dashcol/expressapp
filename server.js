import express from 'express';
import expressejslayouts from 'express-ejs-layouts';
import path from 'path';
import inventoryData from './src/controller/controller.js';
import upload from './src/middleware/file-upload.js';
import validate from './src/middleware/middleware.js';




const app=express();

app.set('view engine','ejs');
app.set('views',path.join(path.resolve(),'src','view'))
app.use(expressejslayouts);
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(express.json());

const inventData= new inventoryData();
app.get('/',inventData.inventoryItems);
app.get('/add',inventData.addItems)
app.post('/',upload.single('image'),validate,inventData.newItems)

app.listen(3100,()=>{
    console.log("Listened at 3100");
    
})