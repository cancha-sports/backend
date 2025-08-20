import { Model, DataTypes } from "sequelize";

export default class RecreationArea extends Model {
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
        recreation_area_type_id: {
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
        tableName: "recreation_areas",
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

    this.belongsTo(models.RecreationAreaType, {
      foreignKey: "recreation_area_type_id",
      as: "recreation_area_type",
    });

    this.hasOne(models.RecreationAreaSchedule, {
      foreignKey: "recreation_area_id",
      as: "recreation_area_schedule",
    });

    this.hasMany(models.RecreationAreaBooking, {
      foreignKey: "recreation_area_id",
      as: "recreation_area_bookings",
    });
  }
}
