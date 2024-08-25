import data from "../model/model.js"

export default class inventoryData{
   
    inventoryItems(req,res){
        let products=data.get();
      res.render('table',{products,userEmail:req.session.userEmail})
    }

    addItems(req,res){
      res.render('add',{errorMessage:null,userEmail:req.session.userEmail})
    }

    newItems(req,res){
    
      const {name,desc,price}=req.body;
      const image='images/'+req.file.filename;
      data.add(name, desc, image, price);
      const products = data.get();
      res.render('table',{products,userEmail:req.session.userEmail});
    }


    updateItem(req,res,next){
          const id=req.params.id;
          const found=data.getByid(id)
          if(found){
            res.render('update',{products:found,errorMessage:null,userEmail:req.session.userEmail})
          }
          else{
            res.status(401).send('product not found');
          }
    }
    deleteItem(req,res,next){
      const id=req.params.id;
      const found=data.getByid(id);
      if(!found){
        return res.status(401).send('Product not found');
      }
      data.delete(id);
      const products = data.get();
      res.render('table',{products,userEmail:req.session.userEmail});

    }
  
 

    
}