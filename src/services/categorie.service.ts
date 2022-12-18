import { Categorie } from "../models/categorie/categorie.model";
import { CreateCategorie } from "../models/categorie/createCategorie.model";
import * as categorieRepository from "../repository/categorie.repository";

export const getAll = (): Promise<Categorie[]> => {
    return categorieRepository.getAll();
};

export const getById = (id: number): Promise<Categorie> => {
    return categorieRepository.getById(id);
};

export const create = (createCategorie: CreateCategorie): Promise<Categorie> => {
    return categorieRepository.create(createCategorie);
};