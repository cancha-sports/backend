import "dotenv/config";

export default {
  url: process.env.DATABASE_URL,
  dialect: "postgres",
  logging: false,
  dialectOptions: {
    ssl: process.env.DATABASE_URL
      ? {
          require: true,
          rejectUnauthorized: false,
        }
      : false,
  },
  define: {
    timestamps: true,
    underscored: true,
  },
};
