import { DataTypes, Model, Sequelize } from "sequelize";
import { ILikeCreate, Ilike } from "../interfaces/like";

export function likeModel(sequelize: Sequelize) {
  const Likes = sequelize.define<Model<Ilike, ILikeCreate>>(
    "likes",
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
      postId: {
        type: DataTypes.BIGINT,
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
      tableName: "Likes",
    },
  );
  return Likes;
}
