const connection = require('../database/connection');

module.exports = {
    
    async create(req, res) {
        const status = "active";
        const {name, cpf, whatsapp, photo, email, saloonid, services, birthday} = req.body;

        await connection('worker').insert({
            name, cpf, whatsapp, photo, email, saloonid, services, birthday, status
        })
        return res.json({"status" : "Success"})
    },

    async index(req, res) {
        const workers = await connection('worker').where("status", "active").select('*');
        return res.json(workers);
    },

    async update(req, res) {
        const {id, name, cpf,  photo, whatsapp, email, birthday, services} = req.body;
        const workers = await connection('worker').where("id", id)
        .update({
            name, cpf, whatsapp, photo, email, birthday, services
        })
        return res.json(workers);
    },
    async desactivate(req, res) {
        const status = "inative"
        const {id} = req.body;
        const workers = await connection('worker').where("id", id)
        .update({
            status
        })
        return res.json(workers);
    },
    async activate(req, res) {
        const status = "active"
        const {id} = req.body;
        const workers = await connection('worker').where("id", id)
        .update({
            status
        })
        return res.json(workers);
    }
}