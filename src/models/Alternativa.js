const {Model, DataTypes} = require('sequelize');

class alternativa extends Model{
    static init(sequelize){
        super.init({
            descricaoAlternativa:DataTypes.STRING,
            questoes_idquestoes:DataTypes.INTEGER,
            tipo:DataTypes.TINYINT
        },{sequelize})
    }
    static associate(models){
        this.belongsTo(models.questoes, { foreignKey: 'questoes_idquestoes', as: 'questoes'});
    } 
}

module.exports = alternativa;