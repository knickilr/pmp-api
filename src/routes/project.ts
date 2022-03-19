import express, {Request, Response } from "express";
import Project from "../model/project"

const router = express.Router()

//returns all projects
router.get('/', async (req: Request, res:Response)=>{
    try {
         const proj = await Project.find()
         res.status(200).json(proj)
    } catch(err){
        console.log(err)
    }
})

//returns one project
router.get('/:id', async (req: Request, res:Response)=>{
    try {
        const proj = await Project.findOne(req.params.id as any)
        res.status(200).json(proj)
    }
    catch(err){
        console.log(err)
    }
})

//adds a poject to the collection
router.post('/', async(req: Request, res:Response)=>{
    const proj = await new Project(req.body)
    try {
        await proj.save()
        res.status(200).json(proj)
    } catch(err){
        console.log(err)
    }

})

//update the given project
router.put("/:id", async(req: Request, res:Response)=>{
    try{
        if(req.params.id){
            const proj = await Project.findOneAndUpdate(req.params.id  as any, {$set: req.body})
            res.status(200).json("Project is updated")
        }
    }catch(err){
        console.log(err)
    }
})

export default router;
