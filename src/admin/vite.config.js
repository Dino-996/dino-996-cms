import { mergeConfig } from 'vite';
export default (config) => {
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
                'react-router-dom',
            ],
        },
    });
};
