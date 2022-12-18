import { Request, Response } from "express";
import { errorMessage } from "../config/error";
import * as produitService from "../services/produit.service";

export const getAll = async (req: Request, res: Response) => {
    const produits = await produitService.getAll();
    res.send(produits);
};

export const getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const produit = await produitService.getById(id);
    if (produit) {
        res.send(produit);
    } else {
        res.status(404).send(errorMessage("Produit introuvable", 404));
    }
};