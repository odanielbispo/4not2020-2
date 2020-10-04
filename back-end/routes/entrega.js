const controller = require('../controllers/entrega')
const express = require('express')

const router = express.Router()    

router.post('/', controller.pedido)
router.get('/', controller.listarPedidos)
router.get('/:id', controller.obterUmPedido)
router.put('/', controller.atualizarPedido)
router.delete('/', controller.excluirPedido)

module.exports = router