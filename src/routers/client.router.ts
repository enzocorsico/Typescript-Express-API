import express from "express";
import clientController from "../controllers/client.controller";

const clientRouter = express.Router();

clientRouter.get("/", clientController.getAll);
clientRouter.get("/:id", clientController.getById);

export default clientRouter;