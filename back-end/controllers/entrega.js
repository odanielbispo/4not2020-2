const Entrega = require('../models/Entrega')

const controller = {}

//OPERAÇÃO CREATE, funcção novo()
controller.pedido = async (req, res) => {
    // Usa os dados que chega dentro do body da requisição
    // e depois envia ao BD para a criação de um novo objeto
    try{
        await Entrega.create(req.body) 
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

controller.listarPedidos = async (req, res) => {
    try{
        let dados = await Entrega.find() //traz todos os cursos cadastrados
        res.send(dados)
    }
    catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
}

//OPERAÇÃO RETRIEVE (one), função obterUm()

controller.obterUmPedido = async (req, res) =>{
    try{
        //capturando o parametro ID da url
        const id = req.params.id
        let obj = await Entrega.findById(id)

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

//OPERAÇÃO UPDATE, função atualizar()

controller.atualizarPedido = async (req, res) => {
    // Isolar o _id do objeto que está sendo alterado
    try{
        const id = req.body._id

        // Busca e substituição do conteúdo do objeto
        let ret = await Entrega.findByIdAndUpdate(id, req.body)

        // Se encontrou e atualizou, retornamos HTTP 204: No content
        if(ret) res.status(204).end()
        //não encontrou o objeto para ser alterado, retorno HTTP 404: Not found
        else res.status(404).end()
    }
    catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
}

//OPERAÇÃO DELETE, função excluir()

controller.excluirPedido = async (req, res) => {
    try{
        //Isolando o id
        const id = req.body._id
        
        //Busca pelo id e exclusao
        let ret = await Entrega.findByIdAndDelete(id)

        //encontrou e excluiu, HTTP 204: No content
        if(ret) res.status(204).end()
        // Não encontrou, HTTP 404: Not Found
        else res.status(404).end()
    }
    catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
}

module.exports = controller