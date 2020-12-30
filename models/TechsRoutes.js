const mongoose = require('mongoose')
const techsRoutesSchema = new mongoose.Schema({
   _id : false ,
          
     nom :{
        type :String,                   
        required :true
         },


   techIDRoutes: {
            type: Number,
            required : true
                  },
    
  clientID :{
      type:Number,
      required:true
  } ,
  tempsPasseChezClient:{
         type : Number,
         required : true 
  },

 
    
    } )

   
   


    



    module.exports = mongoose.model('techsRoutes', techsRoutesSchema)