module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["cdn.sanity.io", "images.unsplash.com"],
  },
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "https://admin-mindfullife.vercel.app/",
        permanent: true,
      },
    ];
  },
};
