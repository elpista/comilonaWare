const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pedido', {
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    mesa: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    precio: {
      type: DataTypes.FLOAT
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
