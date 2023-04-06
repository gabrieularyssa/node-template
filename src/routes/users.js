import express from "express";
import { getAllUsers, getUniqueUser, postUser } from "../controllers/userController";
import { JWTChecker } from "../middlewares/JWTchecker";
import { userValidator } from "../middlewares/userValidator";
import { passwordValidator } from "../middlewares/passwordValidator";
import { validate } from "express-validator"

const userRouter = express.Router();

userRouter.get("/", JWTChecker.admin, getAllUsers)
userRouter.get("/:id", JWTChecker.user, getUniqueUser)
userRouter.post('/', userValidator, passwordValidator, validate, postUser )

module.exports = userRouter