const controller = require('../controllers/produto')
const express = require('express')

const router = express.Router()

router.post('/', controller.novoPedido)
router.get('/', controller.todos)
router.get('/:id', controller.single)
router.put('/', controller.update)
router.delete('/', controller.remover)

module.exports = router