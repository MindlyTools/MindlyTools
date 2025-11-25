import User from "./User.js";
import Todo from "./Todo.js";
import Note from "./Note.js";
import ToolUsage from "./ToolUsage.js";

// 1 user → many todos
User.hasMany(Todo, { foreignKey: "userId", onDelete: "CASCADE" });
Todo.belongsTo(User, { foreignKey: "userId" });

// 1 user → many notes
User.hasMany(Note, { foreignKey: "userId", onDelete: "CASCADE" });
Note.belongsTo(User, { foreignKey: "userId" });

// analytics: 1 user → many tool usage logs
User.hasMany(ToolUsage, { foreignKey: "userId", onDelete: "CASCADE" });
ToolUsage.belongsTo(User, { foreignKey: "userId" });

export { User, Todo, Note, ToolUsage };
