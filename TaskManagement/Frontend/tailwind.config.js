// /** @type {import('tailwindcss').Config} */
// export default {
//     content: [
//       './src/**/*.{js,ts,jsx,tsx}', // Scan all JS, TS, JSX, and TSX files in the src directory
//     ],
//     theme: {
//       container: {
//         center: true,
//         padding: '2rem',
//         screens: {
//           '2xl': '1400px',
//         },
//       },
//       extend: {
//         colors: {
//           primary: '#D2232A',
//           'primary-light': '#d2232a4d',
//           base: '#EAF1FB',
//           secondary: '#58585A',
//           white: '#FFFFFF',
//           black: '#000000',
//           'slate-100': '#7C8798',
//           'slate-200': '#F1F3F7',
//           'slate-250': '#E5E9F1',
//           'gray-50': '#F8F8F8',
//           'gray-100': '#EEEEEE',
//           'gray-150': '#D9D9D9',
//           'gray-200': '#BDBDBD',
//           'gray-250': '#C5CDDB',
//           'gray-300': '#9E9E9E',
//           'gray-400': '#757575',
//           'gray-500': '#616161',
//           'gray-600': '#404040',
//           'gray-700': '#333333',
//           'gray-800': '#282828',
//           'gray-900': '#181818',
//           success: '#1DB954',
//           'success-light': '#A7E8B0',
//           'success-dark': '#10793C',
//           danger: '#E22134',
//           'danger-light': '#F8A1A8',
//           'danger-dark': '#A21724',
//           warning: '#FFED51',
//           'warning-light': '#FFF8A5',
//           'warning-dark': '#C7A800',
//           info: '#2E77D0',
//           'info-light': '#A9C8F2',
//           'info-dark': '#1A5193',
//           'info-100': '#DDEEFB',
//           'info-200': '#2995E9',
//           'purple-200': '#9b52e4',
//           'purple-100': '#EFE3FB',
//           'danger-hover': '#B91F25',
//           'danger-pressed': '#AC1D22',
//           'danger-200': '#FEF2F2',
//           'success-100': '#e1f6e6',
//           'success-200': '#3bb155',
//           'warning-100': '#FFF5DA',
//           'warning-200': '#EDA210',
//           'warning-300': '#FDEEEE',
//           'warning-400': '#FCDCDC',
//           border: 'hsl(var(--border) / <alpha-value>)',
//         },
//         fontSize: {
//           'display-1': ['80px', { lineHeight: '88px', letterSpacing: '-0.125rem' }],
//           'display-2': ['48px', { lineHeight: '56px', letterSpacing: '-0.063rem' }],
//           'heading-1': ['32px', { lineHeight: '40px', letterSpacing: '-0.031rem' }],
//           'heading-2': ['24px', { lineHeight: '32px', letterSpacing: '-0.016rem' }],
//           'heading-2.5': ['20px', { lineHeight: '29px' }],
//           'heading-3': ['18px', { lineHeight: '26px', letterSpacing: '-0.016rem' }],
//           'body-1': ['16px', { lineHeight: '24px', letterSpacing: '0' }],
//           'body-2': ['14px', { lineHeight: '20px', letterSpacing: '0' }],
//           'body-3': ['14px', { lineHeight: '20.3px', letterSpacing: '0.3px' }],
//           'body-4': ['12px', { lineHeight: '17.4px', letterSpacing: '0.3px' }],
//           'cta-md': ['14px', { letterSpacing: '0.094rem' }],
//           'cta-sm': ['12px', { letterSpacing: '0.063rem' }],
//           'cta-sm-lh': ['12px', { letterSpacing: '0.063rem', lineHeight: '18px' }],
//           'cta-md-no-space': ['14px', { letterSpacing: '0' }],
//           'cta-sm-no-space': ['12px', { letterSpacing: '0' }],
//           'label-lg': ['14px', { letterSpacing: '0.063rem' }],
//           'label-md': ['12px', { letterSpacing: '0.063rem' }],
//           'small-label': ['10px', { lineHeight: '14px', letterSpacing: '0.016rem' }],
//           caption: ['12px', { lineHeight: '16px', letterSpacing: '0.016rem' }],
//           breadcrumb: ['10px', { lineHeight: '14px', letterSpacing: '0.016rem' }],
//           'table-header': [
//             '12px',
//             { lineHeight: '17px', letterSpacing: '0.016rem', fontWeight: '700' },
//           ],
//         },
//         fontFamily: {
//           'dm-sans': ['DM Sans', 'sans-serif'],
//         },
//         boxShadow: {
//           xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
//           sm: '0px 1px 2px 0px rgba(16, 24, 40, 0.06)',
//           md: '0px 4px 8px -2px rgba(16, 24, 40, 0.1)',
//           lg: '0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
//           xl: '0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
//           '2xl': '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
//           '3xl': '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
//           modal: '0px 4px 16px 0px rgba(0, 0, 0, 0.16)',
//           card: '0px 2px 8px 0px #00000012',
//         },
//       },
//     },
//     variants: {
//       extend: {
//         truncate: ['responsive'],
//       },
//     },
//     plugins: [],
//   };
  

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './lib/**/*.{js,jsx,ts,tsx}',
    './public/index.html',  
    './public/static/**/*.{jpg,jpeg,png,gif,svg}',   
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}',
      './lib/**/*.{js,jsx,ts,tsx}',
      './public/index.html',  
      './public/static/**/*.{jpg,jpeg,png,gif,svg}'
],
darkMode: 'class',
theme: {
  fontFamily: {
    satoshi: ['Satoshi', 'sans-serif'],
  },
  screens: {
    '2xsm': '375px',
    xsm: '425px',
    '3xl': '2000px',
    ...defaultTheme.screens,
  },
  extend: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#FFFFFF',
      black: {
        ...colors.black,
        DEFAULT: '#1C2434',
        2: '#010101',
      },
      red: {
        ...colors.red,
        DEFAULT: '#FB5454',
      },
      body: '#64748B',
      bodydark: '#AEB7C0',
      bodydark1: '#DEE4EE',
      bodydark2: '#8A99AF',
      primary: '#3C50E0',
      secondary: '#80CAEE',
      stroke: '#E2E8F0',
      gray: {
        ...colors.gray,
        DEFAULT: '#EFF4FB',
        2: '#F7F9FC',
        3: '#FAFAFA',
      },
      graydark: '#333A48',
      whiten: '#F1F5F9',
      whiter: '#F5F7FD',
      boxdark: '#24303F',
      'boxdark-2': '#1A222C',
      strokedark: '#2E3A47',
      'form-strokedark': '#3d4d60',
      'form-input': '#1d2a39',
      meta: {
        1: '#DC3545',
        2: '#EFF2F7',
        3: '#10B981',
        4: '#313D4A',
        5: '#259AE6',
        6: '#FFBA00',
        7: '#FF6766',
        8: '#F0950C',
        9: '#E5E7EB',
        10: '#0FADCF',
      },
      success: '#219653',
      danger: '#D34053',
      warning: '#FFA70B',
    },
    fontSize: {
      'title-xxl': ['44px', '55px'],
      'title-xl': ['36px', '45px'],
      'title-xl2': ['33px', '45px'],
      'title-lg': ['28px', '35px'],
      'title-md': ['24px', '30px'],
      'title-md2': ['26px', '30px'],
      'title-sm': ['20px', '26px'],
      'title-xsm': ['18px', '24px'],
    },
    spacing: {
      4.5: '1.125rem',
      5.5: '1.375rem',
      6.5: '1.625rem',
      7.5: '1.875rem',
      8.5: '2.125rem',
      9.5: '2.375rem',
      10.5: '2.625rem',
      11: '2.75rem',
      11.5: '2.875rem',
      12.5: '3.125rem',
      13: '3.25rem',
      13.5: '3.375rem',
      14: '3.5rem',
      14.5: '3.625rem',
      15: '3.75rem',
      15.5: '3.875rem',
      16: '4rem',
      16.5: '4.125rem',
      17: '4.25rem',
      17.5: '4.375rem',
      18: '4.5rem',
      18.5: '4.625rem',
      19: '4.75rem',
      19.5: '4.875rem',
      21: '5.25rem',
      21.5: '5.375rem',
      22: '5.5rem',
      22.5: '5.625rem',
      24.5: '6.125rem',
      25: '6.25rem',
      25.5: '6.375rem',
      26: '6.5rem',
      27: '6.75rem',
      27.5: '6.875rem',
      29: '7.25rem',
      29.5: '7.375rem',
      30: '7.5rem',
      31: '7.75rem',
      32.5: '8.125rem',
      34: '8.5rem',
      34.5: '8.625rem',
      35: '8.75rem',
      36.5: '9.125rem',
      37.5: '9.375rem',
      39: '9.75rem',
      39.5: '9.875rem',
      40: '10rem',
      42.5: '10.625rem',
      44: '11rem',
      45: '11.25rem',
      46: '11.5rem',
      47.5: '11.875rem',
      49: '12.25rem',
      50: '12.5rem',
      52: '13rem',
      52.5: '13.125rem',
      54: '13.5rem',
      54.5: '13.625rem',
      55: '13.75rem',
      55.5: '13.875rem',
      59: '14.75rem',
      60: '15rem',
      62.5: '15.625rem',
      65: '16.25rem',
      67: '16.75rem',
      67.5: '16.875rem',
      70: '17.5rem',
      72.5: '18.125rem',
      73: '18.25rem',
      75: '18.75rem',
      90: '22.5rem',
      94: '23.5rem',
      95: '23.75rem',
      100: '25rem',
      115: '28.75rem',
      125: '31.25rem',
      132.5: '33.125rem',
      150: '37.5rem',
      171.5: '42.875rem',
      180: '45rem',
      187.5: '46.875rem',
      203: '50.75rem',
      230: '57.5rem',
      242.5: '60.625rem',
    },
    maxWidth: {
      2.5: '0.625rem',
      3: '0.75rem',
      4: '1rem',
      11: '2.75rem',
      13: '3.25rem',
      14: '3.5rem',
      15: '3.75rem',
      22.5: '5.625rem',
      25: '6.25rem',
      30: '7.5rem',
      34: '8.5rem',
      35: '8.75rem',
      40: '10rem',
      42.5: '10.625rem',
      44: '11rem',
      45: '11.25rem',
      70: '17.5rem',
      90: '22.5rem',
      94: '23.5rem',
      125: '31.25rem',
      132.5: '33.125rem',
      142.5: '35.625rem',
      150: '37.5rem',
      180: '45rem',
      203: '50.75rem',
      230: '57.5rem',
      242.5: '60.625rem',
      270: '67.5rem',
      280: '70rem',
      292.5: '73.125rem',
    },
    maxHeight: {
      35: '8.75rem',
      70: '17.5rem',
      90: '22.5rem',
      550: '34.375rem',
      300: '18.75rem',
    },
    minWidth: {
      22.5: '5.625rem',
      42.5: '10.625rem',
      47.5: '11.875rem',
      75: '18.75rem',
    },
    zIndex: {
      999999: '999999',
      99999: '99999',
      9999: '9999',
      999: '999',
      99: '99',
      9: '9',
      1: '1',
    },
    opacity: {
      65: '.65',
    },
    backgroundImage: {
      video: "url('../images/video/video.png')",
    },
    content: {
      'icon-copy': 'url("../images/icon/icon-copy-alt.svg")',
    },
    transitionProperty: { width: 'width', stroke: 'stroke' },
    borderWidth: {
      6: '6px',
    },
    boxShadow: {
      default: '0px 8px 13px -3px rgba(0, 0, 0, 0.07)',
      card: '0px 1px 3px rgba(0, 0, 0, 0.12)',
      'card-2': '0px 1px 2px rgba(0, 0, 0, 0.05)',
      switcher:
        '0px 2px 4px rgba(0, 0, 0, 0.2), inset 0px 2px 2px #FFFFFF, inset 0px -1px 1px rgba(0, 0, 0, 0.1)',
      'switch-1': '0px 0px 5px rgba(0, 0, 0, 0.15)',
      1: '0px 1px 3px rgba(0, 0, 0, 0.08)',
      2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
      3: '0px 1px 5px rgba(0, 0, 0, 0.14)',
      4: '0px 4px 10px rgba(0, 0, 0, 0.12)',
      5: '0px 1px 1px rgba(0, 0, 0, 0.15)',
      6: '0px 3px 15px rgba(0, 0, 0, 0.1)',
      7: '-5px 0 0 #313D4A, 5px 0 0 #313D4A',
      8: '1px 0 0 #313D4A, -1px 0 0 #313D4A, 0 1px 0 #313D4A, 0 -1px 0 #313D4A, 0 3px 13px rgb(0 0 0 / 8%)',
    },
    dropShadow: {
      1: '0px 1px 0px #E2E8F0',
      2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
    },
    keyframes: {
      rotating: {
        '0%, 100%': { transform: 'rotate(360deg)' },
        '50%': { transform: 'rotate(0deg)' },
      },
    },
    animation: {
      'ping-once': 'ping 5s cubic-bezier(0, 0, 0.2, 1)',
      rotating: 'rotating 30s linear infinite',
      'spin-1.5': 'spin 1.5s linear infinite',
      'spin-2': 'spin 2s linear infinite',
      'spin-3': 'spin 3s linear infinite',
    },
  },
},
plugins: [],
};
