const mongoose = require('mongoose');


const EmployeeProfileSchema = new mongoose.Schema({

    name:{

        type: String,
        required:true 
    }
},

{timestamps:{createdAt:'created_at'}}

 )

 const EmployeeProfile = mongoose.model('EmployeeProfileSchema',EmployeeProfileSchema)

 exports.EmployeeProfile = EmployeeProfile



