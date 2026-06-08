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
        role: {
          type: DataTypes.ENUM("admin", "owner", "customer"),
          allowNull: false,
          defaultValue: "customer",
        },
        email_verified_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        photo: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        is_premium: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
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
      },
    );
  }

  static associate(models) {
    this.hasMany(models.Establishment, {
      foreignKey: "owner_id",
      as: "establishments",
    });

    this.hasMany(models.CourtBooking, {
      foreignKey: "user_id",
      as: "court_bookings",
    });
  }
}
