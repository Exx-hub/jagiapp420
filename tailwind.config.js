/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        couple: "url('./assets/bgs/couple.jpg')",
        siargao: "url('./assets/bgs/siargao.jpg')",
        siargao2: "url('./assets/bgs/siargao2.jpg')",
        bucketlist: "url('./assets/bgs/bucketlist.jpg')",
        bucket2: "url('./assets/bgs/bucketlist2.jpg')",
        vatican: "url('./assets/bgs/vatican.jpg')",
        vatican1: "url('./assets/bgs/vatican1.jpg')",
        turkey: "url('./assets/bgs/turkey.jpg')",
        northernlights: "url('./assets/bgs/northernlights.jpg')",
        hotair: "url('./assets/bgs/hotair.jpg')",
        camping: "url('./assets/bgs/camping.jpg')",
        camping2: "url('./assets/bgs/camping2.jpg')",
      },
    },
  },
  plugins: [],
};
