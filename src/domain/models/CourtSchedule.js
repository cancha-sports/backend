import { Model, DataTypes } from "sequelize";

export default class CourtSchedule extends Model {
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
        tableName: "court_schedules",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        underscored: true,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Court, {
      foreignKey: "court_id",
      as: "court",
    });
  }
}
