import Sequelize from "sequelize";
import databaseConfig from "../../shared/config/database.js";
import Court from "../../domain/models/Court.js";
import CourtBooking from "../../domain/models/CourtBooking.js";
import CourtSchedule from "../../domain/models/CourtSchedule.js";
import Establishment from "../../domain/models/Establishment.js";
import User from "../../domain/models/User.js";

const models = [Court, CourtBooking, CourtSchedule, Establishment, User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.forEach((model) => model.init(this.connection));
    models.forEach((model) => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
    });
  }
  getQueryInterface() {
    if (!this.connection) {
      throw new Error(
        "Database connection not initialized. Cannot get QueryInterface.",
      );
    }
    return this.connection.getQueryInterface();
  }
}

export default new Database();
