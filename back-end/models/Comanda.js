const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    }, 
    produto:{ type: mongoose.ObjectId, ref: 'Produto', required: true},
    produto2:{ type: mongoose.ObjectId, ref: 'Produto', required: false},
    produto3:{ type: mongoose.ObjectId, ref: 'Produto', required: false},
    produto4:{ type: mongoose.ObjectId, ref: 'Produto', required: false},
    produto5:{ type: mongoose.ObjectId, ref: 'Produto', required: false},
    produto6:{ type: mongoose.ObjectId, ref: 'Produto', required: false},
    produto7:{ type: mongoose.ObjectId, ref: 'Produto', required: false},
    produto8:{ type: mongoose.ObjectId, ref: 'Produto', required: false},
    produto9:{ type: mongoose.ObjectId, ref: 'Produto', required: false},
    produto10:{ type: mongoose.ObjectId, ref: 'Produto', required: false},
    produto11:{ type: mongoose.ObjectId, ref: 'Produto', required: false},
    produto12:{ type: mongoose.ObjectId, ref: 'Produto', required: false},
    produto13:{ type: mongoose.ObjectId, ref: 'Produto', required: false},
    produto14:{ type: mongoose.ObjectId, ref: 'Produto', required: false},
    produto15:{ type: mongoose.ObjectId, ref: 'Produto', required: false},
    produto16:{ type: mongoose.ObjectId, ref: 'Produto', required: false},
    produto17:{ type: mongoose.ObjectId, ref: 'Produto', required: false},
    produto18:{ type: mongoose.ObjectId, ref: 'Produto', required: false},
    produto19:{ type: mongoose.ObjectId, ref: 'Produto', required: false},
    produto20:{ type: mongoose.ObjectId, ref: 'Produto', required: false}
})

/*
    Parametros do metodo mongoose.model()
    1º -> Nome do modelo (sempre igual ao nome do arquivo)
    2º -> Estrutura (esquema) do modelo
    3º -> Nome da aplicaçãpo (collection) em que os objetos criados a partir do 
    modelo serão armazenados no MongoDB
*/

module.exports = mongoose.model('Comanda', esquema, 'comandas')