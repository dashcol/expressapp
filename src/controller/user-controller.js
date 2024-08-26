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
req.session.userEmail=email;
var products=data.get();
res.render('table',{products,userEmail:req.session.userEmail});
  }  
  
  logout(req,res){
    req.session.destroy((err)=>{
      if(err){
        console.log(err);
      }else{
        res.redirect('/login');
      }
    });
    res.clearCookie('lastVisit');   
  }
}