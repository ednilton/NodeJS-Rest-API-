const express = require('express');
const router = express.Router();

// Listando todos Pedidos
router.get('/', (req, res, next)=> {
    res.status(200).send({
        mensagem: 'Listando Pedidos'
    }); 
});


// Inserindo POST de Pedidos
router.post('/', (req, res, next)=> {
    res.status(201).send({
        mensagem: 'Registrando Pedido'
    }); 
});

// Buscando ID de Pedido
router.get('/:id_pedido', (req, res, next)=> {
    const id = req.params.id_pedido
    res.status(200).send({
        mensagem: 'Buscando unico Pedido',
        id_pedido: id
    }); 
});


// Remove um Pedidos
router.delete('/', (req, res, next)=> {
    res.status(201).send({
        mensagem: 'Removendo PEDIDO'
    }); 
});


module.exports = router;