module.exports = (sequelize, DataTypes) => {
    const TransactionBoleto = sequelize.define("TransactionBoleto", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        client_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        buyer_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validade: {
                notEmpty: true
            }
        },
        buyer_email: {
            type: DataTypes.STRING,
            allowNull: false,
            validade: {
                notEmpty: true
            }
        },
        buyer_cpf: {
            type: DataTypes.STRING,
            allowNull: false,
            validade: {
                notEmpty: true
            } 
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        boleto_number: {
            type: DataTypes.STRING,
            allowNull: false,
            validade: {
                notEmpty: true
            }
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            validade:{
                notEmpty: true
            }
        }
    });
    return TransactionBoleto;
}