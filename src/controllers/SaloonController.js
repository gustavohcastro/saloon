const connection = require('../database/connection');

module.exports = {
    
    async create(req, res) {
        const status = "active";
        const photo = "photo"
        const {name, address, whatsapp, description, city, uf, number, password, cep, email, type} = req.body;

        await connection('saloon').insert({
            name, address, whatsapp, photo, description, status, city, uf, number, password, cep, email, type
        })
        return res.json({"status" : "Success"})
    },

    async index(req, res) {
        const saloons = await connection('saloon').where("status", "active").select('*');
        return res.json(saloons);
    },

    async update(req, res) {
        const {id, name, address, whatsapp, description, city, uf, number, password, cep, email, type} = req.body;
        const saloons = await connection('saloon').where("id", id)
        .update({
            name, address, whatsapp, city, uf, description, number, password, cep, email, type
        })
        return res.json(saloons);
    },
    async desactivate(req, res) {
        const status = "inative"
        const {id} = req.body;
        const saloons = await connection('saloon').where("id", id)
        .update({
            status
        })
        return res.json(saloons);
    },
    async activate(req, res) {
        const status = "active"
        const {id} = req.body;
        const saloons = await connection('saloon').where("id", id)
        .update({
            status
        })
        return res.json(saloons);
    }
}