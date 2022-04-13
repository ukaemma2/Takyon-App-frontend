/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
async function redirects(){
  return [
    {
      source: '/about',
      destination: '/',
      permanent: true,
    },
  ]
}

module.exports = nextConfig,redirects;
