export default {
  register(/*{ strapi }*/) {},

  async bootstrap({ strapi }) {
    const params = {
      username: 'admin',
      password: 'admin',
      email: 'admin@admin.it',
      firstname: 'Admin',
      lastname: 'Temp',
      roles: [1],
      blocked: false,
      isActive: true,
    };

    try {
      const adminUser = await strapi.db.query('admin::user').findOne({
        where: { email: params.email },
      });

      if (!adminUser) {
        await strapi.service('admin::user').create(params);
        console.log('Admin creato con successo!');
      }
    } catch (error) {
      console.error("Errore nella creazione dell'admin:", error);
    }
  },
};