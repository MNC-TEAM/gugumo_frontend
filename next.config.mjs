import withPWA from "next-pwa";

const pwa = withPWA({
    dest : "public", // 서비스 워커
    register : true, // 서비스 워커 자동 등록
    skipWaiting : true, // 새로운 서비스 워커가 즉시 활성화
});

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