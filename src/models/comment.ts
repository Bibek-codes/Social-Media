import { Icomment, IcommentCreate } from "../interfaces/comment";
import { DataTypes, Model, Sequelize } from "sequelize";

export function commentModel(sequelize: Sequelize) {
  const Comments = sequelize.define<Model<Icomment, IcommentCreate>>(
    "comments",
    {
      Id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      postId: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      userId: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      text: {
        type: DataTypes.STRING,
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
      tableName: "Comments",
    },
  );
  return Comments;
}
