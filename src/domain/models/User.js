import { Model, DataTypes } from "sequelize";

export default class User extends Model {
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
        },
        email: {
          type: DataTypes.STRING(255),
          allowNull: false,
          unique: true,
        },
        phone: {
          type: DataTypes.STRING(20),
          allowNull: false,
          unique: true,
        },
        password_hash: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        birth_date: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        role_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        email_verified_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        photo: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "users",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        underscored: true,
        paranoid: true,
        deletedAt: "deleted_at",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.UserRole, {
      foreignKey: "role_id",
      as: "role",
    });

    this.hasMany(models.Establishment, {
      foreignKey: "owner_id",
      as: "establishments",
    });

    this.hasMany(models.CourtBooking, {
      foreignKey: "user_id",
      as: "court_bookings",
    });

    this.hasMany(models.RecreationAreaBooking, {
      foreignKey: "user_id",
      as: "recreation_bookings",
    });
  }
}
