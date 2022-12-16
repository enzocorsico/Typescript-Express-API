const clients = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Doe',
    },
    {
        id: 3,
        name: 'John Smith',
    },
    {
        id: 4,
        name: 'Jane Smith',
    },
]

const getAllClients = () => {
    return clients;
};

const getClient = (id: number) => {
    return clients.find((client) => client.id === id);
};

export default {
    getAllClients,
    getClient,
};