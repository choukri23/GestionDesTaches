const express = require('express')

const router = express.Router()

const TechRoutes =require('../models/TechsRoutes')

// Create one techRoutes
router.post('/', async (req, res) => {
    const techRoute = new TechRoutes({
    nom: req.body.nom,
    techIDRoutes: req.body.techIDRoutes,
    clientID :req.body.clientID,
    tempsPasseChezClient :req.body.tempsPasseChezClient
    
 });
 try {
    const newTechRoutes = await techRoute.save()
    res.status(201).json(newTechRoutes)
    } catch (err) {
    res.status(400).json({ message: err.message })
    }
    })


    

router.patch('/:id', getTechRoutes, async (req, res) => {
          
      
        if (req.body.nom != null) {
        res.techRoutes.nom = req.body.nom
        }
    
        if (req.body.techIDRoutes != null) {
            res.techRoutes.techIDRoutes = req.body.techIDRoutes
            }
        if (req.body.clientID != null) {
            
            res.techRoutes.clientID = req.body.clientID 
               
           
         }

         if (req.body.tempsPasseChezClient != null) {
    
            res.techRoutes.tempsPasseChezClient = req.body.tempsPasseChezClient 
               
           
         }
       

        try {
           
          const updatedTechRoutes = await res.techRoutes.save()
             
        res.json(updatedTechRoutes)
        } catch {
            res.status(500).json({ message: err.message })  
        }
        })






    async function getTechRoutes(req, res, next) {
        try {
        techRoutes = await TechRoutes.findById(req.params.id)
        if (techRoutes == null) {
        return res.status(404).json({ message: 'Cant find tech routes'})
        }
        } catch(err){
        return res.status(500).json({ message: err.message })
        }
        res.techRoutes = techRoutes
        next()
        }
    
    

    module.exports = router
