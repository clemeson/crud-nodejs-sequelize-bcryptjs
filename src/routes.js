const router = require('express').Router();

const controller = require('./controoller');


router.get('/:id', controller.read)
router.get('/', controller.getAll)
router.post('/', controller.create)
router.patch('/:id', controller.update) // o metodo path do protocolo htpp atualiza apenas um recurso do corpo da requisçao, enquanto que o put atualiza do corpo.
router.delete('/:id', controller.destroy)



module.exports = router;