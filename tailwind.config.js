/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'announcementBg': "url('../src/assets/images/announcement-banner.png')",
        'loginBg': "url('../src/assets/images/login-bg.png')",
        'logo': "url('../src/assets/images/logo(1).png')",
        'home': "url('../src/assets/images/home-hero-bg.png')",
        'allForums': "url('../src/assets/images/all-forums-bg.png')",
      },




    },
  },
  plugins: [],
}

