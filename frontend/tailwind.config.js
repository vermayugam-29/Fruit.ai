/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'yellowGrad' : '#FFE5C2',
        'customPink' : '#C84AD3',
        'customGreen' : '#C2FFD0',
        'customLightYellow' : '#EFFFC2',
        'customBlue' : '#C2F0FF',
        'testColor' : '#007AFF',
        'customPurp' : '#E4CAFF',
        'faqCustom' : '#3B5998',
        'aboutPurp' : '#FFC2F2',
        'aboutText' : '#C84AD3',
        'homeGrad1' : '#E0BCF3',
        'homeGrad2' : '#7EE7EE'
      },
      backgroundImage: {
        'home-gradient': 'linear-gradient(to right, #E0BCF3, #7EE7EE)',
      },
    },
  },
  plugins: [],
}