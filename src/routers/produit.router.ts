import express from "express";
import * as produitController from "../controllers/produit.controller";

export const produitRouter = express.Router();

produitRouter.get("/", produitController.getAll);
produitRouter.get("/:id", produitController.getById);