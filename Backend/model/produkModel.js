import { Sequelize } from "sequelize";
import database from "../config/db.js";
import User from "./userModel.js";

const {DataTypes} = Sequelize;

const Produk = database.define("produk", {
    uuid:{
        type:DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    }
}, {
    freezeTableName: true
});

User.hasMany(Produk);
Produk.belongsTo(User, {foreignKey: 'userId'});

export default Produk;

