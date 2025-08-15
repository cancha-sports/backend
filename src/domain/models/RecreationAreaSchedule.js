import { Model, DataTypes } from "sequelize";

export default class RecreationAreaSchedule extends Model {
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
        opening_time: {
          type: DataTypes.TIME,
          allowNull: false,
        },
        closing_time: {
          type: DataTypes.TIME,
          allowNull: false,
        },
        game_duration: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        price: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "recreation_area_schedules",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        underscored: true,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.RecreationArea, {
      foreignKey: "recreation_area_id",
      as: "recreation_area",
    });
  }
}
