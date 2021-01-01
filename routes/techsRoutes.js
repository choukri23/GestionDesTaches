const { response } = require('express');
const express = require('express')
const url = require('url');

const app = express();

const router = express.Router()

const TechRoutes =require('../models/TechsRoutes')

// Create one techRoutes
router.post('/', async (req, res) => {
    const techRoute = new TechRoutes({
    nom : req.body.nom,
    listeClients : req.body.listeClients
     
    //clientID :req.body.clientID,
    //tempsPasseChezClient :req.body.tempsPasseChezClient
    
 });
 var str;
 var a;
 try { 
    const newTechRoutes = await techRoute.save(function(err,room) {
         a = room._id ;
   res.json(JSON.parse ('{"a" : "'+a+'"}'))

     })
   // res.status(201).json(newTechRoutes)
     // res.json( JSON.parse ('{"a" : "'+a+'"}'))
   // console.log("------"+  newTechRoutes)
    } catch (err) {
    res.status(400).json({ message: err.message })
    }


    })

 
    

router.patch('/:id', getTechRoutes, async (req, res) => {
                 
        var tab = res.techRoutes.listeClients
            
         var listeCl = req.body.listeClients
         
                  

            var t=[]
            
              t= t.concat(tab)
              t= t.concat(listeCl)

              
              res.techRoutes.listeClients = t
              
                                                                              
         

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
