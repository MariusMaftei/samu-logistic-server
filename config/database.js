import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE_URL ||
    `mysql://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@localhost:3306/${process.env.DATABASE_NAME}`,
  {
    dialect: "mysql",
    define: {
      timestamps: false, // Optional: depends on whether you want timestamps
    },
  }
);

export default sequelize;
