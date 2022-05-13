// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     // loader: "",
//     // path: "https://hidden-fortress-12666.herokuapp.com",
//     domains: ["hidden-fortress-12666.herokuapp.com"],
//     formats: ["image/jpeg"],
//   },
// };

// module.exports = nextConfig;

// next.config.mjs
// export default {
//   images: {
//     loader: "",
//     path: "https://hidden-fortress-12666.herokuapp.com",
//     // domains: ["https://hidden-fortress-12666.herokuapp.com"],
//   },
//   reactStrictMode: true,
// };

module.exports = {
  images: {
    loader: "imgix",
    path: "https://hidden-fortress-12666.herokuapp.com/",
  },
};
