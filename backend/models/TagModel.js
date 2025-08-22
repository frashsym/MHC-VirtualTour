// backend/models/Tag.js
import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Tag = db.define(
  "tags",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Tag;
