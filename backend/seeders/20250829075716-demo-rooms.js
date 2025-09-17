// backend/seeders/20250829075716-demo-rooms.js
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("rooms", [
      {
        name: "Ruang Kelas",
        description: "Ruang kelas utama dengan kapasitas 40 orang",
        panorama_url: "/panorama/classroom.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Laboratorium Komputer",
        description: "Lab komputer dengan 20 unit PC",
        panorama_url: "/panorama/computer-lab.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Perpustakaan",
        description: "Perpustakaan kampus dengan koleksi buku teknik",
        panorama_url: "/panorama/library.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("rooms", null, {});
  },
};
