import { Iuser } from "../interfaces/user";
import Models, { sequelize } from "../models";

export default class UserService {
  static async createUser(body: Iuser) {
    const result = await Models("user").create(body);
    return result;
  }
  static async getAllUsers() {
    const result = (
      await Models("user").findAll({
        where: {
          isActive: true,
        },
      })
    ).map((t) => t.toJSON());
  }
  static async getSingleUser(id: number) {
    const result = await Models("user").findOne({
      where: {
        Id: id,
        isActive: true,
      },
    });
    return result;
  }
  static async upadateUser(body: Iuser, id: number) {
    await Models("user").update(body, {
      where: {
        Id: id,
        isActive: true,
      },
    });
    return true;
  }
  static async deleteUSer(id: number) {
    await Models("like").update(
      { isActive: false },
      {
        where: {
          userId: id,
        },
      },
    );
    await Models("comment").update(
      { isActive: false },
      {
        where: {
          userId: id,
        },
      },
    );
    await Models("post").update(
      { isActive: false },
      {
        where: {
          userId: id,
        },
      },
    );
    await Models("user").update(
      { isActive: false },
      {
        where: {
          Id: id,
        },
      },
    );
    return true;
  }
}
