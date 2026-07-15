/** @type {import('next').Config} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // আপনার ল্যান্ডিং পেজে ব্যবহৃত আনস্প্ল্যাশ ইমেজের জন্য
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;