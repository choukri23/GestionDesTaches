const mongoose = require('mongoose')
const techsSchema = new mongoose.Schema({
    techID: {
    type: Number,
    required :true
    } ,
    nom :{
        type :String,
        required :true

    },

    listeClients :{
       type : {   clientID :{
                   type :Number ,
                    required :true 
                     },
           
                   nomClient : {
                     type : String,
                     required :true
                       } ,
                   
                 prenom:{
                     type :String,
                    required :true   
                        },
                 adresse :{
                    type :String,
                    required :true 
                 },

                 dateDebutIntervention :{
                     type : Date ,
                     required :true 
                 },

                 dateFinIntervention :{
                    type : Date ,
                    required :true 
                },
                     
                

        required :true       
            
       }


    }


    




    });

    module.exports = mongoose.model('techs', techsSchema)