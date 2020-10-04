const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    tipo:{
        type: String,
        required: true,
        enum: ['Bebida', 'Porção', 'Outros']
    },
    valor_produto:{
        type: Number,
        required: true,
        min: 1
    },
    quantidade:{
        type: Number,
        required: true,
        min: 1
    }
})

/*
    Parametros do metodo mongoose.model()
    1º -> Nome do modelo (sempre igual ao nome do arquivo)
    2º -> Estrutura (esquema) do modelo
    3º -> Nome da aplicaçãpo (collection) em que os objetos criados a partir do 
    modelo serão armazenados no MongoDB
*/

module.exports = mongoose.model('Produto', esquema, 'produtos')