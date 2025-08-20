import { Model, DataTypes } from "sequelize";

export default class Court extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING(100),
          allowNull: false,
          unique: true,
        },
        establishment_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        sport_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        photo: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "courts",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        underscored: true,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Establishment, {
      foreignKey: "establishment_id",
      as: "establishment",
    });

    this.belongsTo(models.Sport, {
      foreignKey: "sport_id",
      as: "sport",
    });

    this.hasOne(models.CourtSchedule, {
      foreignKey: "court_id",
      as: "court_schedule",
    });

    this.hasMany(models.CourtBooking, {
      foreignKey: "court_id",
      as: "court_bookings",
    });
  }
}
