import app from "./app.js";
import sequelize from "./models/index.js";

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await sequelize.sync({ alter: true }); //  will add timezone 
    console.log("Database synced");

    app.listen(PORT, () => {
      console.log(`Backend running on port ${PORT}`);
    });
  } catch (err) {
    console.error("DB sync error:", err);
  }
})();
