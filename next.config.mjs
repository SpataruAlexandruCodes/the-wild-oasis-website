/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uxarlbxrluptqotqyoty.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-iamages/**",
      },
    ],
  },
  // output: "export",
};

export default nextConfig;
