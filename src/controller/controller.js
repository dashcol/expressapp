import data from "../model/model.js"




export default class inventoryData{
   
    inventoryItems(req,res){
        let products=data.get();
      res.render('table',{products})
    }

    addItems(req,res){
      res.render('add',{errorMessage:null})
    }

    newItems(req,res){
    
      const {name,desc,price}=req.body;
      const image='images/'+req.file.filename;
      data.add(name, desc, image, price);
      const products = data.get();
      res.render('table',{products});
    }

    
}