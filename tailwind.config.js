/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1280px',
			},
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
			colors: {
				// Chrome Accountants Brand Colors
				'ca-blue': '#021d40',
				'ca-mango': '#fcb426',
				'ca-silver': '#cccccc',
				'ca-text': '#6a6c6e',
				'ca-background': '#ffffff',
				'ca-dark': '#1e3347',
				
				// Semantic colors
				'success': '#28a745',
				'error': '#dc3545',
				'warning': '#ffc107',
				
				// Shadcn UI colors (keeping for component compatibility)
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#fcb426',
					foreground: '#021d40',
				},
				secondary: {
					DEFAULT: '#021d40',
					foreground: '#ffffff',
				},
				accent: {
					DEFAULT: '#fcb426',
					foreground: '#021d40',
				},
				destructive: {
					DEFAULT: '#dc3545',
					foreground: '#ffffff',
				},
				muted: {
					DEFAULT: '#f8f9fa',
					foreground: '#6a6c6e',
				},
				popover: {
					DEFAULT: '#ffffff',
					foreground: '#021d40',
				},
				card: {
					DEFAULT: '#ffffff',
					foreground: '#021d40',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				'slide-in': {
					from: { opacity: '0', transform: 'translateX(-20px)' },
					to: { opacity: '1', transform: 'translateX(0)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in': 'slide-in 0.4s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}