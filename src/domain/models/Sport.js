import { Model, DataTypes } from "sequelize";

export default class Sport extends Model {
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
          type: DataTypes.STRING(50),
          allowNull: false,
          unique: true,
        },
      },
      {
        sequelize,
        tableName: "sports",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        underscored: true,
      },
    );
  }
  static associate(models) {
    this.hasMany(models.Court, {
      foreignKey: "sport_id",
      as: "courts",
    });
  }
}
