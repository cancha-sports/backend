import { Model, DataTypes } from "sequelize";

export default class RecreationAreaType extends Model {
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
        tableName: "recreation_area_types",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        underscored: true,
      },
    );
  }
  static associate(models) {
    this.hasMany(models.RecreationArea, {
      foreignKey: "recreation_area_type_id",
      as: "recreation_areas",
    });
  }
}
