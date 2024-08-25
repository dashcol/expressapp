import express from 'express';
import expressejslayouts from 'express-ejs-layouts';
import path from 'path';
import inventoryData from './src/controller/controller.js';
import upload from './src/middleware/file-upload.js';
import validate from './src/middleware/middleware.js';
import User from './src/controller/user-controller.js';
import validated from './src/middleware/user-middleware.js';
import session from 'express-session';
import { auth } from './src/middleware/auth.js';




const app=express();

app.set('view engine','ejs');
app.set('views',path.join(path.resolve(),'src','view'))
app.use(expressejslayouts);
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(express.json());
app.use(session({
    secret:'secretkey',
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false}, 
}))




const inventData= new inventoryData();
const user=new User();
app.get('/',auth,inventData.inventoryItems);
app.get('/add',auth,inventData.addItems)
app.post('/',auth,upload.single('image'),validate,inventData.newItems)

app.get('/update/:id',auth,inventData.updateItem)
app.get('/delete/:id',auth,inventData.deleteItem)

app.get('/login',user.login)
app.post('/register',validated,user.loginData)
app.get('/register',user.register)
app.post('/login',user.postLogin)


app.get('/logout',user.logout)

app.listen(3100,()=>{
    console.log("Listened at 3100");
    
})