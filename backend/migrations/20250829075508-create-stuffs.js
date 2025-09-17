'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("stuffs", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING, allowNull: false },
      description: { type: Sequelize.TEXT, allowNull: true },
      position_x: { type: Sequelize.FLOAT, allowNull: true },
      position_y: { type: Sequelize.FLOAT, allowNull: true },
      info_image_url: { type: Sequelize.STRING, allowNull: true },

      // foreign keys
      room_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "rooms", // harus sama dengan nama tabel rooms
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      tag_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "tags", // harus sama dengan nama tabel tags
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL", // kalau tag dihapus, stuff tetap ada
      },

      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("stuffs");
  },
};
