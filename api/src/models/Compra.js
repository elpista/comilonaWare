const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Compra', {
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    metodo_pago: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    coste_total: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    fecha: {
      type: DataTypes.TIME,
      allowNull: false
    },
    cambio_pago: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    pago_cliente: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  });
};
