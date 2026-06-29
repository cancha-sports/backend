import "dotenv/config";

const databaseUrl = process.env.DATABASE_URL
  ? new URL(process.env.DATABASE_URL)
  : null;

const databaseConnection = databaseUrl
  ? {
      username: decodeURIComponent(databaseUrl.username),
      password: decodeURIComponent(databaseUrl.password),
      database: decodeURIComponent(databaseUrl.pathname.replace(/^\//, "")),
      host: databaseUrl.hostname,
      port: databaseUrl.port || 5432,
    }
  : {
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
    };

const shouldUseSsl =
  databaseUrl && databaseUrl.searchParams.get("sslmode") !== "disable";

export default {
  // DATABASE_URL tem precedência sobre as variáveis DB_*.
  ...databaseConnection,

  dialect: "postgres",
  logging: false,

  dialectOptions: {
    ssl: shouldUseSsl
      ? {
          require: true,
          rejectUnauthorized: false, // Necessário para alguns provedores como Neon
        }
      : false,
  },

  define: {
    timestamps: true,
    underscored: true,
  },
};
