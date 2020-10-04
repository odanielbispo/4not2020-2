const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome_cliente: {
        type: String,
        required: true
    },
    produto:{
        type: String,
        required: true
    },    
    endereco:{
        type: String, 
        required: true
    },
    ponto_referencia: {
        type: String,
        required: true
    },
    tempo_entrega:{
        type: Number,
        required: true,
        max: 120
    },
    valor_entrega:{
        type: Number,
        required: true,
        default: 8, //Valor assumido se não for informado 
        min: 7
    },
    idade_cliente:{
        type: Number,
        required: true,
        min: 18
    },
    metodo_pagamento:{
        type: String,
        required: true,
        enum: ['Dinheiro', 'Cartão', 'Já pago aplicativo']
    }
})

/*
    Parametros do metodo mongoose.model()
    1º -> Nome do modelo (sempre igual ao nome do arquivo)
    2º -> Estrutura (esquema) do modelo
    3º -> Nome da aplicaçãpo (collection) em que os objetos criados a partir do 
    modelo serão armazenados no MongoDB
*/

module.exports = mongoose.model('Entrega', esquema, 'entregas')