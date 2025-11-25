import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const User = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  uid: { type: DataTypes.STRING, unique: true },
  email: { type: DataTypes.STRING, allowNull: false },
  username: { type: DataTypes.STRING, allowNull: true, unique: true },
  name: { type: DataTypes.STRING, allowNull: true },
  picture: { type: DataTypes.STRING, allowNull: true },

  // stored time zones
  timezone: { type: DataTypes.STRING, allowNull: true },
});

export default User;
