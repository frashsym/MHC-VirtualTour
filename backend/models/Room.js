// backend/models/Room.js
import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Room = db.define(
  "rooms",
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
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    panorama_url: {
      type: DataTypes.STRING, // link ke foto 360 / asset
      allowNull: true,
    },
  },
  {
    freezeTableName: true, // nama tabel tetap 'rooms'
  }
);

export default Room;
