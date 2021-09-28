const { DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,//?
    primarykey: true,
    },

    tittle:{
      type : DataTypes.STRING,
      allowNull : false,
    },

    summary:{
      type: DataTypes.STRING,
      allowNull : false,
    },

    spoonacularScore:{
      type : DataTypes.STRING
    },

    healtScore:{
      type: DataTypes.STRING
    },

    analyzedInstructions:{
      type: DataTypes.JSON,
    }
    });
  };
  
