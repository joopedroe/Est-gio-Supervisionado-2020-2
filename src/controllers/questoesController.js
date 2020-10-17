const Questoes = require('../models/Questoes');

module.exports={
    async index(req,res){
        const { questoes_id } = req.params;
        console.log(questoes_id)
        const questao = await Questoes.findByPk(questoes_id,{
            include:{association:'alternativas'}
        })
        return res.json(questao)
    },
    async delete(req,res){
        const { questoes_id } = req.params;
        const questao = await Questoes.destroy({where:{id:questoes_id}})
        return res.json({status:"Deletado com sucesso"})
    },
    async store(req,res){
        const {descricao, imagem} = req.body;   
        const questao = await Questoes.create({descricao, imagem})
        return res.json(questao);
    }, 
    async lista(req,res){  
        const questoes = await Questoes.findAll();
        return res.json(questoes);
    },
    async put(req,res){
        const { questoes_id } = req.params;
        const {descricao, imagem} = req.body;   
        const questao = await Questoes.update({descricao, imagem},{where:{id:questoes_id}})
        if (questao==1) {
            return res.status(200).send({status:"Atualizado com sucesso"})
        }
        return res.status(500).send({status:"Não atualizado"})
        
    }
}