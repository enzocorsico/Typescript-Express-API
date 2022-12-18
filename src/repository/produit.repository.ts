import { MysqlError } from "mysql";
import { db } from "../config/db";
import { Produit } from "../models/produit/produit.model";

export const getAll = async (): Promise<Produit[]> => {
    return new Promise((resolve, reject) => {
        db.query({
            sql: "SELECT * FROM produit"
        }, (err: MysqlError, result: Produit[]) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

export const getById = async (id: number): Promise<Produit> => {
    return new Promise((resolve, reject) => {
        db.query({
            sql: "SELECT * FROM produit WHERE id = ?",
            values: [id]
        }, (err: MysqlError, result: Produit[]) => {
            if (err) {
                reject(err);
            } else {
                resolve(result[0])
            }
        });
    });
}
