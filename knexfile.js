require("dotenv").config();

const pgConnection = process.env.DATABASE_URL || "postgres://obgbetgmabsnol:850c09fd5d981249a93ef10338c78a822f2c98b00a386daa6e798b95288785f3@ec2-54-156-149-189.compute-1.amazonaws.com:5432/db9nd4qik94grb";

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./database/users.db3",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },

  production: {
    client: "pg",
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
};

