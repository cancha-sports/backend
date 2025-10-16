import { Model, DataTypes } from "sequelize";

export default class CourtBooking extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        court_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        start_time: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        end_time: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        status: {
          type: DataTypes.ENUM("confirmed", "canceled"),
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "court_bookings",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        underscored: true,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Court, {
      foreignKey: "court_id",
      as: "court",
    });

    this.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });
  }
}
