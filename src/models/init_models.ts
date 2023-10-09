import { Sequelize } from "sequelize";
import { userModel } from "./users";
import { postModel } from "./post";
import { likeModel } from "./like";
import { commentModel } from "./comment";

export function initModels(sequelize: Sequelize) {
    const user = userModel(sequelize);
    const post = postModel(sequelize);
    const like = likeModel(sequelize);
    const comment = commentModel(sequelize);

    post.belongsTo(user,{as:"user" , foreignKey:"userId"})
    user.hasMany(post,{as: "posts" , foreignKey:"userId"})

    like.belongsTo(post,{as:"post" , foreignKey:"postId"})
    post.hasMany(like,{as: "likes" , foreignKey:"postId"})

    like.belongsTo(user,{as:"user" , foreignKey:"userId"})
    user.hasMany(like,{as: "likes" , foreignKey:"userId"})

    comment.belongsTo(user,{ as:"user", foreignKey:"userId"})
    user.hasMany(comment,{as:"comments" , foreignKey:"userId"})

    comment.belongsTo(post,{ as:"post", foreignKey:"postId"})
    post.hasMany(comment,{as:"comments" , foreignKey:"postId"})

    return {
        user,
        post,
        like,
        comment
    }
}