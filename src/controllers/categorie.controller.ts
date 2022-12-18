import { Request, Response } from "express";
import { errorMessage } from "../config/error";
import * as categorieService from "../services/categorie.service";

export const getAll = async (req: Request, res: Response) => {
    const categories = await categorieService.getAll();
    res.send(categories);
};

export const getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const categorie = await categorieService.getById(id);
    if (categorie) {
        res.send(categorie);
    } else {
        res.status(404).send(errorMessage("Categorie introuvable", 404));
    }
};

export const create = async (req: Request, res: Response) => {
    try {
        const categorie = await categorieService.create(req.body);
        res.send(categorie);
    } catch (e) {
        res.status(400).send(errorMessage("Erreur lors de l'ajout", 400));
    }
}