import {body,validationResult} from 'express-validator';


const validate=async(req,res,next)=>{ 
    const rules=[
    body('name').notEmpty().withMessage("Enter a name"),
    body('desc').notEmpty().withMessage("Please provide a description"),
    
    body('image').custom((value,{req})=>{
        if(!req.file){
            throw new Error("Image is Required")
        }
        return true;
       
    }),
    body('price').isFloat({gt:0}).withMessage("Please enter a price")
]

await Promise.all(rules.map(rule=> rule.run(req)))

var result=validationResult(req);
if(!result.isEmpty()){
    return res.render('add',{errorMessage:result.array()[0].msg})
}
next();
}
export default validate;