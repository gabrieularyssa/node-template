const express = require('express');
// const path = require('path')
const router = express.Router();
const homeController = require('./controllers/homeController') 

router.get('/', homeController.paginaInicial)

router.get('/teste', homeController.teste);

router.post('/', homeController.postTest)

module.exports = router