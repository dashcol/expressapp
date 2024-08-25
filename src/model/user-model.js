export default class userModel{
constructor(id,name,email,password){
this.id=id;
this.name=name;
this.email=email;
this.password=password;
}

static getUser(){
    return user;
}
static add(name,email,password){
    const newuser=new userModel(user.length+101,name,email,password);
    user.push(newuser);
}

static validUser(email,password){
const result=user.find(f=>f.email==email && f.password==password);
return result;
}
}

var user=[];