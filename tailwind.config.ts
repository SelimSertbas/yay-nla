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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
                // Custom colors for Yenişehir Bor Vakfı - Green tones replaced with gold
                bor: {
                    green: {
                        light: '#FFD54F', // Changed from green to gold
                        DEFAULT: '#FFC107', // Changed from green to gold
                        dark: '#FF8F00', // Changed from green to gold
                    },
                    earth: {
                        light: '#FFD54F', // Changed from brown to gold
                        DEFAULT: '#FFC107', // Changed from brown to gold
                        dark: '#FF8F00', // Changed from brown to gold
                    },
                    gold: {
                        light: '#ffd54f',
                        DEFAULT: '#ffb300',
                        dark: '#ff8f00',
                    },
                    // New gold palette for the updated design
                    gold2: {
                        lightest: '#fff8e1',
                        lighter: '#ffecb3',
                        light: '#ffe082',
                        DEFAULT: '#ffc107',
                        medium: '#ffb300',
                        dark: '#ffa000',
                        darker: '#ff8f00',
                        darkest: '#ff6f00',
                    },
                    beige: '#f5f0e1',
                },
			},
			fontFamily: {
				sans: ['Montserrat', 'system-ui', 'sans-serif'],
				heading: ['Montserrat', 'system-ui', 'sans-serif'],
				body: ['Open Sans', 'system-ui', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
                'fade-up': {
                    '0%': { 
                        opacity: '0',
                        transform: 'translateY(20px)'
                    },
                    '100%': { 
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
                'grow': {
                    '0%': { 
                        width: '0%',
                    },
                    '100%': { 
                        width: '100%',
                    },
                },
                'float': {
                    '0%': { 
                        transform: 'translateY(0)'
                    },
                    '50%': { 
                        transform: 'translateY(-10px)'
                    },
                },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-up': 'fade-up 0.8s ease-out forwards',
                'grow': 'grow 1.5s ease-out forwards',
                'float': 'float 3s ease-in-out infinite',
                'bounce': 'bounce 1s infinite',
            },
            backgroundImage: {
                'hero-pattern': "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('/uploads/7249b351-97b1-45c8-8af0-5e8a3a5c93b9.png')",
                'gradient-green': "linear-gradient(90deg, #ffc107 0%, #ff8f00 100%)", // Changed to gold gradient
                'gradient-gold': "linear-gradient(90deg, #ffc107 0%, #ff8f00 100%)",
            },
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
