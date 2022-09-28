module.exports = {
    addons: ['@storybook/addon-essentials', {
        name: '@storybook/addon-postcss',
        options: {
            postcssLoaderOptions: {
                implementation: require('postcss'),
            },
        },
    }],
    babel: async (options) => ({
        ...options,
    }),
    framework: '@storybook/react',
    stories: ['../src/components/**/*.stories.tsx'],
    webpackFinal: async (config, { configType }) => {
        // Make whatever fine-grained changes you need
        // Return the altered config
        return config;
    },
};