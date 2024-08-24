import userModel from "../model/user-model.js";
import data from "../model/model.js";
export default class User{

    register(req,res){
        res.render('register',{errorMessage:null});
      }

login(req,res,next){
    res.render('login',{errorMessage:null});
  }


  loginData(req,res){
    const {name,email,password}=req.body;
    userModel.add(name,email,password);
      res.render('login',{errorMessage:null});

  }

  postLogin(req,res){
const {email,password}=req.body;
const user=userModel.validUser(email,password);
if(!user){
 return res.render('login',{errorMessage:'Invalid Credentials'})
}
var products=data.get();
res.render('table',{products});
  } 
}