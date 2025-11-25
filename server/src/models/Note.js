import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Note = sequelize.define("Note", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  content: { type: DataTypes.TEXT, allowNull: false }
});

export default Note;
