/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['tailwindui.com'],
      },
      webpack: (config) => {
        config.module.rules.push({
          test: /\.(mov|mp4)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'static/videos', // Specify where to output the videos
                publicPath: '/_next/static/videos', // URL path to the output directory
              },
            },
          ],
        });
    
        return config;
      },
    
}

module.exports = nextConfig
