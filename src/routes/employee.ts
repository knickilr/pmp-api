import express, {Request, Response } from "express";
import Employee from "../model/employee"

const router = express.Router()

//returns all employees
router.get('/', async (req: Request, res:Response)=>{
    try {
        const emp = await Employee.find()
        res.status(200).json(emp)
   } catch(err){
       console.log(err)
   }
})

//returns one employee 
router.get('/:empId', async (req: Request, res: Response)=>{
    try {
        const emp = await Employee.findOne(req.params.id as any)
        res.status(200).json(emp)
    }
    catch(err){
        console.log(err)
    }
})

//add employee details 
router.post('/', async (req: Request, res: Response)=>{
    const employee = new Employee({
        fName: req.body.fName,
        _id: req.body._id,
    })
    try {
        const emp = await employee.save()
        res.status(200).json(emp)
    } catch(err){
        console.log(err)
    }
})

//update the employee
router.put("/:empId", async(req: Request, res: Response) =>{

    if(req.params.empId){
        try{
            const empl = await Employee.findByIdAndUpdate(req.params.empId as any, {$set: req.body})
            res.status(200).json(empl)
        } catch(err){
            return res.status(500).json(err);
        }
    }
})

export default router;
