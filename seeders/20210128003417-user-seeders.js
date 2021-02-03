'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('users', [
        {
          name: 'Yoga',
          profession: "Admin",
          role: "admin",
          email: "yulandayoga@gmail.com",
          password: await bcrypt.hash('rahasia', 10),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Yulanda',
          profession: "Web Developer",
          role: "student",
          email: "yulanda@gmail.com",
          password: await bcrypt.hash('rahasia123', 10),
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('users', null, {});
  }
};
