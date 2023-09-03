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
        hotair: "url('./assets/bgs/hotairballoons.jpg')",
        camping: "url('./assets/bgs/camping.jpg')",
        camping2: "url('./assets/bgs/camping2.jpg')",
        cherry: "url('./assets/bgs/cherry.jpg')",
        korea1: "url('./assets/bgs/korea1.jpg')",
        korea2: "url('./assets/bgs/korea2.jpg')",
        travel: "url('./assets/bgs/travel.jpg')",
      },
      animation: {
        "slide-from-top": "slide-down 300ms both",
        wiggle: "wiggle 2s linear infinite",
        fadeIn: "fadeIn 800ms",
      },
      keyframes: {
        "slide-down": {
          "0%": { transform: "translateY(-50px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
