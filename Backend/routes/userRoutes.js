import express from "express";
import {
  getUser,
  getOneUser,
  createUser,
  deleteUser,
  updateUser,
} from "../controller/users.js";

const router = express.Router();

router.get('/users', getUser)
router.get('/users/:id', getOneUser)
router.patch('/users/:id', updateUser)
router.post('/users', createUser)
router.delete('/users/:id', deleteUser)

export default router;
