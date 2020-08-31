const mongoose = require('mongoose');

// Define collection and schema
const EmployeeSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required:true
   },
   designation: {
      type: String,
      required:true
   },
   phoneNumber: {
      type: Number,
      required:true
   },
   department_id:{

      type:mongoose.Schema.Types.ObjectId,
      ref:'Department',
      required:true
   }
}, {timestamps : { createdAt : 'created at'}}
)

const Employee = mongoose.model('Employee' , EmployeeSchema)

exports.Employee = Employee

