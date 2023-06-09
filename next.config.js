/** @type {import('next').NextConfig} */
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn-icons-png.flaticon.com',
                port: '',
                pathname: '/**/**/*',
            },
        ]
    },
    experimental: { serverComponentsExternalPackages: ["mongoose"], proxyTimeout: 6000 },
    webpack: config => {
        config.experiments = { ...config.experiments, topLevelAwait: true },
            Object.assign(config.resolve.alias, {
                '@mongodb-js/zstd': false,
                '@aws-sdk/credential-providers': false,
                'snappy': false,
                'aws4': false,
                'mongodb-client-encryption': false,
                'kerberos': false,
                'supports-color': false
            });
        config.plugins.push(new FilterWarningsPlugin({
            exclude: [/the request of a dependency is an expression/]
        }));
        return config
    },

}

module.exports = nextConfig
