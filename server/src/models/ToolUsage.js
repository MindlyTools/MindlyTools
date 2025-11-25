import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const ToolUsage = sequelize.define("ToolUsage", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  toolName: { type: DataTypes.STRING },
});

export default ToolUsage;
