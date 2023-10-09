import { Sequelize } from "sequelize";
import { ProcessEnv } from "../environment";
import { initModels } from "./init_models";
const config = process.env as unknown as ProcessEnv;
export const sequelize = new Sequelize({
  host: config.DB_HOST_NAME,
  port: config.DB_PORT,
  username: config.DB_USERNAME,
  password: config.DB_PASSWORD,
  database: config.DB_DATABASE,
  dialect: "mysql",
});
sequelize.authenticate();
const models = initModels(sequelize);
// console.log(typeof models)
// sequelize.sync({force:true});

export default function Models<K extends keyof typeof models>(
  key: K,
): (typeof models)[K] {
  return models[key];
}
