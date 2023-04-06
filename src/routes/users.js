import express from "express";
import { getAllUsers, getUniqueUser, postNewUser, postLogin } from "../controllers/userController";
import { JWTChecker } from "../middlewares/JWTchecker";
import { userValidator } from "../middlewares/userValidator";
import { passwordValidator } from "../middlewares/passwordValidator";
import { emailValidator } from "../middlewares/emailValidator";

const userRouter = express.Router();

userRouter.get("/", JWTChecker.admin, getAllUsers)
userRouter.get("/:id", JWTChecker.user, getUniqueUser)
userRouter.post('/', userValidator, passwordValidator, postNewUser)
userRouter.post('/login', emailValidator, passwordValidator, postLogin)

module.exports = userRouter