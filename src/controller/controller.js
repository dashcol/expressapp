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


    updateItem(req,res,next){
          const id=req.params.id;
          const found=data.getByid(id)
          if(found){
            res.render('update',{products:found,errorMessage:null})
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
      res.render('table',{products});

    }
  
 

    
}