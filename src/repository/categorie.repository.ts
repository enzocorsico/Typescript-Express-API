import { MysqlError } from "mysql";
import { db } from "../config/db";
import { Categorie } from "../models/categorie/categorie.model";
import { CreateCategorie } from "../models/categorie/createCategorie.model";

export const getAll = async (): Promise<Categorie[]> => {
    return new Promise((resolve, reject) => {
        db.query({
            sql: "SELECT * FROM categorie"
        }, (err: MysqlError, result: Categorie[]) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

export const getById = async (id: number): Promise<Categorie> => {
    return new Promise((resolve, reject) => {
        db.query({
            sql: "SELECT * FROM categorie WHERE id = ?",
            values: [id]
        }, (err: MysqlError, result: Categorie[]) => {
            if (err) {
                reject(err);
            } else {
                resolve(result[0])
            }
        });
    });
}

export const create = async (createCategorie: CreateCategorie): Promise<Categorie> => {
    return new Promise((resolve, reject) => {
        db.query({
            sql: "INSERT INTO categorie (nom) VALUES (?)",
            values: [createCategorie.nom]
        }, (err: MysqlError, result: any) => {
            if (err) {
                reject(err);
            } else {
                const categorie: Categorie = {
                    id: result.insertId,
                    nom: createCategorie.nom
                }
                resolve(categorie);
            }
        });
    });
}
