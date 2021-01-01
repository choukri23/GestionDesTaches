const mongoose = require('mongoose')
const techsRoutesSchema = new mongoose.Schema({


  nom: {
    type: String,
    required: true
  },
  listeClients: {
    type: {
           clientID: {
                    type: Number,
                    required: true
                     },
          tempsPasseChezClient: {
                    type: Number,
                    required: true
                      }
          ,
          required :true
        }
      }  
   

  });

//  techsRoutesSchema.virtual('nom').get(function(){
//return this._id;
//   });












module.exports = mongoose.model('techsRoutes', techsRoutesSchema)