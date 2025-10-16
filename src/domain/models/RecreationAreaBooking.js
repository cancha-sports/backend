import { Model, DataTypes } from "sequelize";

export default class RecreationAreaBooking extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        recreation_area_id: {
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
        tableName: "recreation_area_bookings",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        underscored: true,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.RecreationArea, {
      foreignKey: "recreation_area_id",
      as: "recreation_area",
    });

    this.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });
  }
}
