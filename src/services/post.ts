import Models from "../models";
import PlatformError from "platform-error";

export default class PostService {
  static async createPost(uid: number, text: string) {
    const payload = {
      userId: uid,
      text,
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true,
    };
    const result = await Models("post").create(payload);
    return result;
  }

  static async getAllPostsOfSingleUser(id: number) {
    const result = await Models("post").findAll({
      where: {
        userId: id,
        isActive: true,
      },
    });
    return result;
  }

  static async getPostOfUser() {
    // const post = await Models("post").findAll({where:{
    //     userId:uid
    // }})
    const post = await Models("user").findAll({
      include: {
        model: Models("post"),
        as: "posts",
        where: {
          isActive: true,
        },
      },
    });
    return post;
  }
  static async getPostOfSingleUser(uid: number) {
    const post = await Models("user").findOne({
      where: {
        Id: uid,
        isActive: true,
      },
      include: {
        model: Models("post"),
        as: "posts",
        where: {
          isActive: true,
        },
      },
    });
    return post;
  }
  static async getSinglePostOfSingleUser(uid: number, pid: number) {
    const result = await Models("user").findOne({
      where: {
        Id: uid,
        isActive: true,
      },
      include: {
        model: Models("post"),
        as: "posts",
        where: {
          Id: pid,
          isActive: true,
        },
      },
    });
    return result;
  }

  static async getAllPostsLikesAndComments(pid: number) {
    const posts = await Models("post").findAll({
      where: {
        Id: pid,
      },
      include: {
        model: Models("like"),
        as: "likes",
      },
    });
    const comments = await Models("comment").findAll({
      where: {
        postId: pid,
      },
    });
    const payload = {
      posts,
      comments,
    };
    return payload;
  }

  static async getPostsLikesAndComments() {
    const result = (
      await Models("post").findAll({
        where: {
          isActive: true,
        },
      })
    ).map((t) => t.toJSON());
    if (!result) throw new PlatformError("Not Found");
    const data = [];
    for (const res of result) {
      const likes = await Models("like").count({
        where: {
          postId: res.Id,
        },
      });
      const comments = await Models("comment").count({
        where: {
          postId: res.Id,
        },
      });
      const { Id } = res;
      const payload = {
        Id,
        NoOfLikes: likes,
        NoOfComments: comments,
      };
      data.push(payload);
    }
    return data;
  }
}
