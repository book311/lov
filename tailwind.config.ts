import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "#121212",
          translucent: "rgba(30, 30, 30, 0.7)",
        },
        foreground: {
          DEFAULT: "#FFFFFF",
          muted: "#E0E0E0",
          translucent: "rgba(255, 255, 255, 0.1)",
        },
        primary: {
          DEFAULT: "#FFFFFF",
          soft: "#E0E0E0",
          muted: "#A0A0A0",
        },
        secondary: {
          DEFAULT: "#1A1A1A",
          soft: "rgba(30, 30, 30, 0.9)",
        },
        accent: {
          DEFAULT: "#00f5d4",
          soft: "#33f7dc",
          muted: "rgba(0, 245, 212, 0.1)",
        },
      },
      backgroundImage: {
        'gradient-glow': 'radial-gradient(circle at center, rgba(30, 30, 30, 0.7) 0%, #121212 100%)',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 245, 212, 0.3)',
        'neon-lg': '0 0 30px rgba(0, 245, 212, 0.4)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;