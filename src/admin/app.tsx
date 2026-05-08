import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    locales: [
      'it'
    ],
    auth: {
      logo: ""
    },
    menu: {
      logo: ""
    },
    tutorials: false,
    notification: { release: false }
  },

  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
