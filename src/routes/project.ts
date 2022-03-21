import express, {Request, Response } from "express";
import Project from "../model/project"

const router = express.Router()

//returns all projects
router.get('/', async (req: Request, res:Response)=>{
    try {
         const proj = await Project.find()
         res.status(200).json(proj)
    } catch(err){
        return res.status(500).json(err);
    }
})

//returns one project
router.get('/:id', async (req: Request, res:Response)=>{
    try {
        const proj = await Project.findOne(req.params.id as any)
        res.status(200).json(proj)
    }
    catch(err){
        return res.status(500).json(err);
    }
})

//adds a poject to the collection
router.post('/', async(req: Request, res:Response)=>{
    const proj = await new Project(req.body)
    try {
        await proj.save()
        res.status(200).json(proj)
    } catch(err){
        return res.status(500).json(err);
    }

})

//update the given project
router.put("/:_id", async(req: Request, res:Response)=>{
    try{
        if(req.params._id){
            const proj = await Project.findByIdAndUpdate({_id: req.params._id}, {$set: {name:req.body.name, description:req.body.description, sDate:req.body.sDate, employee:req.body.employee}})
            res.status(200).json(proj)
        }
    }catch(err){
        return res.status(500).json(err);
    }
})

export default router;
