import { Model, DataTypes } from "sequelize";

export default class Establishment extends Model {
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
        latitude: {
          type: DataTypes.DECIMAL(9, 6),
          allowNull: false,
        },
        longitude: {
          type: DataTypes.DECIMAL(9, 6),
          allowNull: false,
        },
        owner_id: {
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
        tableName: "establishments",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        underscored: true,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: "owner_id",
      as: "owner",
    });

    this.hasMany(models.RecreationArea, {
      foreignKey: "establishment_id",
      as: "recreation_areas",
    });

    this.hasMany(models.Court, {
      foreignKey: "establishment_id",
      as: "courts",
    });
  }
}
