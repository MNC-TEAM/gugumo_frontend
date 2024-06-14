import withPWA from "next-pwa";

const pwa = withPWA({
    dest : "public",
    disable : process.env.NODE_ENV === 'production'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler : {
        styledComponents: true, // styledComponent를 컴파일할때 사용
    },
    webpack(config) { // SVG을 사용하기 위함
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        });
        return config;
    }
};

export default pwa(nextConfig);