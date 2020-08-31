const express = require('express');
const app = express();
const router = express.Router();

// Department model
const {Department} = require('../models/Department');

router.post('/createDepartment', async(req,res)=> {

  const department = new Department(req.body);
  await department.save();
  res.send({status:true,message:'save successful'})

})



router.get('/getAllDepartments',async(req, res) => {

  const department = await Department.find()
  res.send({status:true,department:department})
 
})

// Get single employee
router.get('/read/:id' , (req, res) => {
  Department.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update employe
router.put('/update/:id' ,(req, res, next) => {
  Department.findByIdAndUpdate(req.params.id, {
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
  Department.findOneAndRemove(req.params.id, (error, data) => {
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
