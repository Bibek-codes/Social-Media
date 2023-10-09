import { IUserCreate, Iuser } from "../interfaces/user";
import { DataTypes, Model, Sequelize } from "sequelize";

export function userModel(sequelize: Sequelize) {
  const Users = sequelize.define<Model<Iuser, IUserCreate>>(
    "users",
    {
      Id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      tableName: "Users",
    },
  );
  return Users;
}
