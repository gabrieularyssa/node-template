import express from "express";
import { getAllBudgets, getUniqueBudget, postBudget } from "../controllers/budgetController";
import { JWTChecker } from "../middlewares/JWTchecker";

const budgetRouter = express.Router();

budgetRouter.get("/", JWTChecker.admin, getAllBudgets)
budgetRouter.get("/:id", JWTChecker.user, getUniqueBudget)
budgetRouter.post("/", JWTChecker.user, postBudget) 

module.exports = budgetRouter
