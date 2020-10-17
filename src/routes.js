const express= require('express');
const connection =require('./database/index')
const routes= express.Router();
const QuestaoController = require('./controllers/questoesController')
const AlternativasController=require('./controllers/alternativasController')
const UserController = require('./controllers/authController')

routes.get('/',(req,res)=>{
connection.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
    return res.json({hello:'word'});
})
routes.post('/questoes',QuestaoController.store)
routes.get('/questoes/:questoes_id/alternativas',QuestaoController.index)
routes.get('/questoes/todas',QuestaoController.lista)
routes.delete('/questoes/:questoes_id/excluir',QuestaoController.delete)
routes.delete('/alternativa/:alternativa_id/excluir', AlternativasController.delete)
routes.get('/alternativa/:alternativa_id/resposta', AlternativasController.validaQuestao)
routes.post('/alternativas',AlternativasController.store)
routes.post('/usuario', UserController.Autenticacao)
routes.put('/alternativa/:alternativa_id/atualizar',AlternativasController.put)
routes.put('/questao/:questoes_id/atualizar',QuestaoController.put)
module.exports=routes; 