import {body,validationResult} from 'express-validator';


const validated=async(req,res,next)=>{
    const rules=[
    body('name').notEmpty().withMessage("Enter a name"),
    body('email').notEmpty().withMessage("Please provide a description"),
    body('password').notEmpty().withMessage("Please enter a price")
]

await Promise.all(rules.map(rule=> rule.run(req)))

var result=validationResult(req);
if(!result.isEmpty()){
    return res.render('register',{errorMessage:result.array()[0].msg})
}
next();
}
export default validated;