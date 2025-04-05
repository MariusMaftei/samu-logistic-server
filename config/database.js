import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// Update to use your RDS instance endpoint, not localhost
const sequelize = new Sequelize(
  process.env.DATABASE_URL, // Keep this if you're using DATABASE_URL for the connection string
  process.env.DATABASE_USERNAME, // Keep this or ensure the .env file has the correct username
  process.env.DATABASE_PASSWORD, // Make sure the password in .env is correct
  {
    dialect: "mysql",
    host: process.env.DATABASE_HOST,
    port: 3306,
    dialectOptions: {
      connectTimeout: 60000, // Increase timeout to 60 seconds
    },
  }
);

export default sequelize;
