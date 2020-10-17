const {Model, DataTypes} = require('sequelize');

class questoes extends Model{
    static init(sequelize){
        super.init({
            descricao:DataTypes.STRING,
            imagem:DataTypes.BLOB
        },{sequelize})
    }
    static associate(models){
        this.hasMany(models.alternativa, { foreignKey: 'questoes_idquestoes', as: 'alternativas'});
    }
}

module.exports = questoes; 