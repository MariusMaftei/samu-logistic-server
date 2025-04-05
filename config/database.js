import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// Update to use your RDS instance endpoint, not localhost
const sequelize = new Sequelize(
  process.env.DATABASE_URL, // Database name (Ensure this is just the database name)
  process.env.DATABASE_USERNAME, // Username
  process.env.DATABASE_PASSWORD, // Password
  {
    dialect: "mysql",
    host: process.env.DATABASE_HOST, // Host from RDS
    port: 3306, // Default MySQL port
    dialectOptions: {
      connectTimeout: 60000, // Timeout option for long queries
    },
  }
);

export default sequelize;
