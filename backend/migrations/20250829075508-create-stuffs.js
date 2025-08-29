'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("stuffs", [
      {
        name: "PC Gaming",
        description: "Komputer untuk praktikum",
        position_x: 10.5,
        position_y: 5.2,
        info_image_url: "/images/pc.jpg",
        room_id: 1,
        tag_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rak Buku",
        description: "Rak kayu berisi koleksi buku",
        position_x: 2.0,
        position_y: 3.0,
        info_image_url: "/images/rak.jpg",
        room_id: 2,
        tag_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("stuffs", null, {});
  },
};
