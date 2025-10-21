import "dotenv/config";

export default {
  // Usa a URL completa do banco se existir, caso contrário usa variáveis separadas
  url: process.env.DATABASE_URL,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,

  dialect: "postgres",
  logging: false,

  // Configurações SSL para PostgreSQL
  dialectOptions: {
    ssl: process.env.DATABASE_URL
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
