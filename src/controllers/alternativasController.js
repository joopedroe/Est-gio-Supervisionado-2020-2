const Alternativa = require('../models/Alternativa');

module.exports={
    async store(req,res){
        const {descricaoAlternativa, questoes_idquestoes, tipo} = req.body;
        const alternativa = await Alternativa.create({descricaoAlternativa, questoes_idquestoes, tipo});
        return res.json(alternativa);
    },
    async delete(req,res){
        const { alternativa_id } = req.params;
        const questao = await Alternativa.destroy({where:{id:alternativa_id}})
        if (questao==1) {
            return res.status(200).send({status:"Deletado com sucesso"})
        }
        return res.status(500).send({status:"Não deletado"})
    },
    async validaQuestao(req,res){
        const { alternativa_id } = req.params;
        const questao = await Alternativa.findByPk(alternativa_id)
        if (questao.tipo==1) {
            return res.json({status:true}); 
        }
        return res.json({status:false}); 
    },
    async put(req,res){
        const { alternativa_id } = req.params;
        const {descricaoAlternativa, questoes_idquestoes, tipo} = req.body;
        const alternativa = await Alternativa.update({descricaoAlternativa, questoes_idquestoes, tipo},{where:{id:alternativa_id}});
        if (alternativa==1) {
            return res.status(200).send({status:"Atualizado com sucesso"})
        }
        return res.status(500).send({status:"Não atualizado"})
    },
}