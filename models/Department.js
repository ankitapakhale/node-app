const mongoose = require('mongoose');

// Define collection and schema
const DepartmentSchema = new mongoose.Schema({
   department: {
      type: String
   },
   location: {
      type: String
   }
},

{timestamps : {createdAt: 'created_at'}}
)

const Department = mongoose.model('Department',DepartmentSchema)

exports.Department = Department

