const Users = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', { id: Sequelize.INTEGER });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Users');
  }
};

export default Users;
