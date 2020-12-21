const express = require('express')

const router = express.Router()

const Tech = require('../models/tech.js')


// Get all Techs
router.get('/', async (req, res) => {

    const collection =  await  Tech.find()
    // perform actions on the collection object
     console.log(collection)
      
    
    })      


// Get one Tech
router.get('/:id',getTech, (req, res) => {
    res.json(res.tech)
})
// Create one Technicien
router.post('/', async (req, res) => {
    const tech = new Tech({
    techID: req.body.techID,
    nom: req.body.nom,
    listeClients :req.body.listeClients

    
 });
 try {
    const newTech = await tech.save()
    res.status(201).json(newTech)
    } catch (err) {
    res.status(400).json({ message: err.message })
    }
    })


// Update one Tech
router.patch('/:id', getTech, async (req, res) => {

  
    if (req.body.techID != null) {
    res.tech.techID = req.body.techID
    }

    if (req.body.nom != null) {
        res.tech.nom = req.body.nom
        }
    if (req.body.listeClients != null) {
                                  
            listeClients = req.body.listeClients
            tab = res.tech.listeClients;
            
               
             
        i=tab.findIndex ( element => element.clientID === listeClients[0].clientID)
         
       


         if(i === -1) {   
           console.log("okokokokokok")  
           listeClients =   tab.concat(listeClients)
           res.tech.listeClients = listeClients           
         }else {    
               
         

              tab.splice(i, 1); 
              
             listeClients= tab.concat(listeClients)

      
          res.tech.listeClients = listeClients


         }
       
    

}
   
    try {
       
      const updatedTech = await res.tech.save()
         
    res.json(updatedTech)
    } catch {
        res.status(500).json({ message: err.message })  
    }
    })




// Delete one subscriber
router.delete('/:id', getTech, async (req, res) => {
    try {
    await res.tech.remove()
    res.json({ message: 'Deleted This tech' })
    } catch(err) {
    res.status(500).json({ message: err.message })
 
}
})


async function getTech(req, res, next) {
    try {
    tech = await Tech.findById(req.params.id)
    if (tech == null) {
    return res.status(404).json({ message: 'Cant find tech'})
    }
    } catch(err){
    return res.status(500).json({ message: err.message })
    }
    res.tech = tech
    next()
    }






module.exports = router