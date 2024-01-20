const express=require('express')
const router=express.Router();
const { getAllUsers,
     getAllContacts, 
     getAllServices,
      deleteUserById, 
      deleteContactById,
      deleteServiceById,
      getUserById ,
    updateUserById
    }=require("../controllers/admin-controller")
const authMiddleware = require("../middlewares/auth-middleware");
const AdminMidlleware = require('../middlewares/admin-middleware');

router.get('/users',authMiddleware,AdminMidlleware,getAllUsers);
router.get('/users/user/:id',authMiddleware,AdminMidlleware,getUserById);
router.patch('/users/user/edit/:id', authMiddleware, AdminMidlleware, updateUserById);
router.get('/contacts',authMiddleware,getAllContacts);
router.get('/services',authMiddleware,getAllServices);

//delete route
router.delete('/users/delete/:id',authMiddleware,AdminMidlleware,deleteUserById);
router.delete('/contacts/delete/:id', authMiddleware, deleteContactById);
router.delete('/services/delete/:id', authMiddleware, deleteServiceById);

module.exports= router;