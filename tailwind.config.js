/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pigo: {
          gold: "#D4AF37",
          "gold-rich": "#B5952F",
          "gold-deep": "#8A7322",
          "gold-dark": "#5E4D17",
          "gold-darkest": "#2C2513",
          black: "#0f1126",
          "gold-light": "#FDF6E3",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-medium": "float 5s ease-in-out infinite",
        "float-fast": "float 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "orb-1": "orb1 20s infinite alternate ease-in-out",
        "orb-2": "orb2 25s infinite alternate ease-in-out",
        "orb-3": "orb3 18s infinite alternate ease-in-out",
        "shimmer": "shimmer 2.5s infinite linear",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        orb1: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(100px, -60px) scale(1.2)" },
          "100%": { transform: "translate(-80px, 40px) scale(0.9)" },
        },
        orb2: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(-120px, 80px) scale(1.15)" },
          "100%": { transform: "translate(90px, -50px) scale(0.85)" },
        },
        orb3: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(70px, 90px) scale(1.3)" },
          "100%": { transform: "translate(-110px, -70px) scale(0.95)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #D4AF37 0%, #B5952F 25%, #8A7322 50%, #5E4D17 75%, #2C2513 100%)",
        "glass-gradient":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%)",
        "glow-radial":
          "radial-gradient(circle, rgba(212, 175, 55, 0.35) 0%, rgba(42, 23, 33, 0) 70%)",
      },
    },
  },
  plugins: [],
};
