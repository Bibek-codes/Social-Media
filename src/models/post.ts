import { DataTypes, Model, Sequelize } from "sequelize";
import { IPostCreate, Ipost } from "../interfaces/post";

export function postModel(sequelize: Sequelize) {
  const Posts = sequelize.define<Model<Ipost, IPostCreate>>(
    "posts",
    {
      Id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      text: {
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
      tableName: "Posts",
    },
  );
  return Posts;
}
