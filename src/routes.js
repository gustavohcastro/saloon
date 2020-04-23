const express = require('express');
const routes = express.Router();
const SaloonController = require('./controllers/SaloonController');
const WorkerController = require('./controllers/WorkerController');
const ServiceController = require('./controllers/ServiceController');

//Rotas Salões
routes.post('/newsaloon', SaloonController.create);
routes.get('/saloon', SaloonController.index);
routes.put('/editsaloon', SaloonController.update);
routes.put('/desactivate', SaloonController.desactivate);
routes.put('/activated', SaloonController.activate);

//Rotas Workers
routes.post('/newworker', WorkerController.create);
routes.get('/workers', WorkerController.index);
routes.put('/editworker', WorkerController.update);
routes.put('/desactivateworker', WorkerController.desactivate);
routes.put('/activedworker', WorkerController.activate);

//Rotas Workers
routes.post('/newservice', ServiceController.create);
routes.get('/services', ServiceController.index);
routes.put('/editworker', ServiceController.update);
routes.put('/desactivateworker', ServiceController.desactivate);
routes.put('/activedworker', ServiceController.activate);

module.exports = routes;