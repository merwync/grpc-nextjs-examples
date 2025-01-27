const path = require('path');

module.exports = {
    webpack: (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname);
        return config;
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: '/api/:path*', // Proxy to Backend
            },
        ];
    },
};
