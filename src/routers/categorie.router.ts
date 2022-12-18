import express from "express";
import * as categorieController from "../controllers/categorie.controller";

export const categorieRouter = express.Router();

categorieRouter.get("/", categorieController.getAll);
categorieRouter.get("/:id", categorieController.getById);
categorieRouter.post("/", categorieController.create);