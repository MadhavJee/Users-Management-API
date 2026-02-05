import express from "express";
import{
    getUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser

} from "../controler/controler.js";

import {checkAuth, validateUserId } from "../middleware/auth.js"

import { validateCreateUserDTO } from "../dtos/dto.js";


const router = express.Router();

router.get("/",checkAuth,getUsers);
router.post("/get-user", getUsersById);
router.post("/", validateCreateUserDTO, createUser);
//router.post("/",createUser);
router.patch("/:id", updateUser);
router.delete("/:id",validateUserId, deleteUser);

export default router;