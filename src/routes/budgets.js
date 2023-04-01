import express from "express";
import { getAll, getUnique } from "../controllers/budgetController";
import { JWTChecker } from "../middlewares/JWTchecker";

const BudgetRouter = express.Router();

BudgetRouter.get("/", JWTChecker.admin, getAll)
BudgetRouter.get("/:id", JWTChecker.user, getUnique)

module.exports = BudgetRouter