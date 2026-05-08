import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    optimizeDeps: {
      include: [
        '@strapi/design-system',
        '@strapi/icons',
        'react-intl',
        'styled-components',
      ],
    },
    
  });
};
