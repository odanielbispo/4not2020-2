const Curso = require('../models/Curso')

const controller = {}

//OPERAÇÃO CREATE, funcção novo()
controller.novo = async (req, res) => {
    // Usa os dados que chega dentro do body da requisição
    // e depois envia ao BD para a criação de um novo objeto
    try{
        await Curso.create(req.body) 
        // HTTP 201: Created
        res.status(201).end()
    }
    catch(erro){
        console.log(erro)
        // HTTP 500: Internal Server Error
        res.status(500).send(erro)
    }
} 

//OPERAÇÃO RETRIEVE (all), função listar()

controller.listar = async (req, res) => {
    try{
        let dados = await Curso.find() //traz todos os cursos cadastrados
        res.send(dados)
    }
    catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
}

//OPERAÇÃO RETRIEVE (one), função obterUm()

controller.obterUm = async (req, res) =>{
    try{
        //capturando o parametro ID da url
        const id = req.params.id
        let obj = await Curso.findById(id)

        //o objeto existe e foi encontrato
        if(obj) res.send(obj)      //HTTP 200
        //Não encontrado
        else res.status(404).end() //HTTP 404: Not found
    }
    catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
}

module.exports = controller