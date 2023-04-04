import express from "express";
import { getAllBudgets, getUniqueBudget } from "../controllers/budgetController";
import { JWTChecker } from "../middlewares/JWTchecker";

const budgetRouter = express.Router();

budgetRouter.get("/", JWTChecker.admin, getAllBudgets)
budgetRouter.get("/:id", JWTChecker.user, getUniqueBudget)

module.exports = budgetRouter
