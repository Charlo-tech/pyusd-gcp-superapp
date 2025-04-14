module.exports = {
    reactStrictMode: true,
    images: {
      domains: ['phantom.app'],
    },
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://your-gcp-endpoint.com/:path*',
        },
      ];
    },
  };