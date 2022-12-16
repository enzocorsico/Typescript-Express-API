import { Request, Response } from "express";
import clientService from "../services/client.service";

const getAll = (req: Request, res: Response) => {
    const clients = clientService.getAllClients();
    res.send(clients);
};

const getById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const client = clientService.getClient(id);
    res.send(client);
};

export default {
    getAll,
    getById,
};