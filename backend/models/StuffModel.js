// backend/models/Stuff.js
import { DataTypes } from "sequelize";
import db from "../config/Database.js";
import Room from "./Room.js";
import Tag from "./Tag.js";

const Stuff = db.define(
  "stuffs",
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
    position_x: {
      type: DataTypes.FLOAT, // posisi di panorama (opsional)
      allowNull: true,
    },
    position_y: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    info_image_url: {
      type: DataTypes.STRING, // gambar/info popup
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
);

// relasi
Room.hasMany(Stuff, { foreignKey: "room_id" });
Stuff.belongsTo(Room, { foreignKey: "room_id" });

Tag.hasMany(Stuff, { foreignKey: "tag_id" });
Stuff.belongsTo(Tag, { foreignKey: "tag_id" });

export default Stuff;
