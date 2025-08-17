import Sequelize from "sequelize";
import databaseConfig from "../../shared/config/database.js";
import Court from "../../domain/models/Court.js";
import CourtBooking from "../../domain/models/CourtBooking.js";
import CourtSchedule from "../../domain/models/CourtSchedule.js";
import Establishment from "../../domain/models/Establishment.js";
import RecreationArea from "../../domain/models/RecreationArea.js";
import RecreationAreaBooking from "../../domain/models/RecreationAreaBooking.js";
import RecreationAreaSchedule from "../../domain/models/RecreationAreaSchedule.js";
import RecreationAreaType from "../../domain/models/RecreationAreaType.js";
import Sport from "../../domain/models/Sport.js";
import User from "../../domain/models/User.js";
import UserRole from "../../domain/models/UserRole.js";

const models = [
  Court,
  CourtBooking,
  CourtSchedule,
  Establishment,
  RecreationArea,
  RecreationAreaBooking,
  RecreationAreaSchedule,
  RecreationAreaType,
  Sport,
  User,
  UserRole,
];

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
        "Database connection not initialized. Cannot get QueryInterface."
      );
    }
    return this.connection.getQueryInterface();
  }
}

export default new Database();
