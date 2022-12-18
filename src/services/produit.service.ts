import { Produit } from "../models/produit/produit.model";
import * as produitRepository from "../repository/produit.repository";

export const getAll = (): Promise<Produit[]> => {
    return produitRepository.getAll();
};

export const getById = (id: number): Promise<Produit> => {
    return produitRepository.getById(id);
};