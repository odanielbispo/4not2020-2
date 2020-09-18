const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: { type: String, required: true },
    data_inicial: { type: Date, required: true },
    data_final: {
        type: Date, 
        required: true,
        validate: {
            validator: function(valor) {
                return valor >= this.data_inicial
            },
            message: () => 'A data final deve ser maior ou igual à data inicial.'
        }
    },
    dias_da_semana: [{ 
        type: String, 
        required: true, 
        enum: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb']
    }],
    //Valores qe usam apenas a parte de hora de uma data,
    //sao manipulados facilmente como String

    horario_inicial: { type: String, required: true },
    horario_final: { type: String, required: true },
    curso: { type: mongoose.ObjectId, ref: 'Curso', required: true },
    professor: { type: mongoose.ObjectId, ref: 'Professor', required: true },
    sala_aula: { type: mongoose.ObjectId, ref: 'SalasAula', required: true }
})

/*
    Parametros do metodo mongoose.model()
    1º -> Nome do modelo (sempre igual ao nome do arquivo)
    2º -> Estrutura (esquema) do modelo
    3º -> Nome da aplicaçãpo (collection) em que os objetos criados a partir do 
    modelo serão armazenados no MongoDB
*/

module.exports = mongoose.model('Turma', esquema, 'turmas')