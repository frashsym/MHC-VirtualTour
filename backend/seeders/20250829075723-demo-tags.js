'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("tags", [
      { name: "Elektronik", createdAt: new Date(), updatedAt: new Date() },
      { name: "Fasilitas Umum", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("tags", null, {});
  },
};

