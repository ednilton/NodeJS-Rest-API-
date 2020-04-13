const express = require('express');
const router = express.Router();

// Listando todos Produtos
router.get('/', (req, res, next)=> {
    res.status(200).send({
        mensagem: 'Get de Produtos'
    }); 
});


// Inserindo POST de Produtos
router.post('/', (req, res, next)=> {
    res.status(201).send({
        mensagem: 'Post de Produtos'
    }); 
});

// Buscando ID de Produto
router.get('/:id_produto', (req, res, next)=> {
    const id = req.params.id_produto
    res.status(200).send({
        mensagem: 'Buscando unico Produto',
        id_produto: id
    }); 
});






// Altera um Produto
router.patch('/', (req, res, next)=> {
    res.status(201).send({
        mensagem: 'Usando Patch dentro da roda de Produtos'
    }); 
});


// Remove um produto
router.delete('/', (req, res, next)=> {
    res.status(201).send({
        mensagem: 'Usando o Delete dentro da roda de Produtos'
    }); 
});




module.exports = router;