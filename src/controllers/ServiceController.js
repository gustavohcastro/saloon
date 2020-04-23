const connection = require('../database/connection');

module.exports = {
    
    async create(req, res) {
        const status = "active";
        const photo = "photo"
        const {title, description, cost, saloonid } = req.body;

        await connection('service').insert({
            title, description, cost, saloonid, status, photo
        })
        return res.json({"status" : "Success"})
    },

    async index(req, res) {
        const services = await connection('service').where("status", "active").select('*');
        return res.json(services);
    },

    async update(req, res) {
        const {id, title, description, cost, photo} = req.body;
        const services = await connection('saloon').where("id", id)
        .update({
            title, description, cost, photo
        })
        return res.json(services);
    },
    async desactivate(req, res) {
        const status = "inative"
        const {id} = req.body;
        const services = await connection('service').where("id", id)
        .update({
            status
        })
        return res.json(services);
    },
    async activate(req, res) {
        const status = "active"
        const {id} = req.body;
        const services = await connection('service').where("id", id)
        .update({
            status
        })
        return res.json(services);
    }
}