const express = require('express');
const app = express();
const router = express.Router();

// Employee model
const {Employee} = require('../models/Employee');

// Add Employee
router.post('/createEmployees', async(req,res)=> {

  console.log(JSON.stringify(req.body))

  const employee = new Employee(req.body);
  await employee.save();
  res.send({status:true,message:'save successful'})

})

// Get All Employees

router.get('/getAllEmployees',async(req, res) => {

  console.log('hi');
  const employee = await Employee.find().populate('department_id')
  res.send({status:true,employee:employee})
})

// Get single employee
router.get('/read/:id',(req, res) => {
  Employee.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update employee
router.put('/update/:id',(req, res, next) => {
  Employee.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete employee
router.delete('/delete/:id' ,(req, res, next) => {
  Employee.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;
