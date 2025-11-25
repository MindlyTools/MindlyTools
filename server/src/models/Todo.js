import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Todo = sequelize.define("Todo", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  done: { type: DataTypes.BOOLEAN, defaultValue: false },
});

export default Todo;
