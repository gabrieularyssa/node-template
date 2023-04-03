import express from "express";
import { getAllUsers, getUniqueUser } from "../controllers/userController";
import { JWTChecker } from "../middlewares/JWTchecker";

const userRouter = express.Router();

userRouter.get("/", JWTChecker.admin, getAllUsers)
userRouter.get("/:id", JWTChecker.user, getUniqueUser)

module.exports = userRouter