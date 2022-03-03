import { defineConfig } from 'windicss/helpers'

const config = defineConfig({
  attributify: {
    prefix: 'w:',
  },
  shortcuts: {
    'theme-light-spread': 'font-light text-[14px] leading-9 md:leading-11 tracking-[4px]',
    'theme-title': 'text-[26px] sm:text-[44px] font-bold leading-8 sm:leading-11 md:leading-14',
    'theme-paragraph': 'text-[18px] leading-9 md:leading-10',
  },
  theme: {
    extend: {
      colors: {
        primary: '#ad9d86',
        secondary: '#a8a29e',
        accent: '#382406',
        light: '#f2f2f2'
      },
    },
    container: {
      center: true,
      padding: {
        'DEFAULT': '1rem',
        'sm': '2rem',
        'lg': '4rem',
        'xl': '5rem',
        '2xl': '6rem',
      },
    },
    screens: {
      'sm': '640px',
      'md': '1240px',
      'lg': '1440px',
      'xl': '1880px',
      '2xl': '2560px',
    },
    fontFamily: {
      body: 'Montserrat, sans-serif',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    fontWeight: {
      thin:         '100',
      extralight:   '200',
      light:        '300',
      normal:       '400',
      medium:       '500',
      semibold:     '600',
      bold:         '700',
    },
    letterSpacing: {
      normal: 'normal',
    },
    lineHeight: {
      normal: '1.5rem',
    },
    spacing: {
      '0':      '0px',
      'none':   '0px',
      'px':     '1px',
      'auto':   'auto',
      'xs':     '0.25rem',
      'sm':     '0.5rem',
      'md':     '1rem',
      'lg':     '1.5rem',
      'xl':     '2rem',
      '2xl':    '3rem',
      '3xl':    '4rem',
    },
    width: {
      'col-1': '8.333333333333334%',
      'col-2': '16.666666666666668%',
      'col-3': '25%',
      'col-4': '33.33333333333333%',
      'col-5': '41.66666666666667%',
      'col-6': '50%',
      'col-7': '58.333333333333336%',
      'col-8': '66.66666666666667%',
      'col-9': '75%',
      'col-10': '83.33333333333334%',
      'col-11': '91.66666666666667%',
      'col-12': '100%',
      'full': '100%',
      'screen': '100vw',
    },
    height: {
      'col-1': '8.333333333333334%',
      'col-2': '16.666666666666668%',
      'col-3': '25%',
      'col-4': '33.33333333333333%',
      'col-5': '41.66666666666667%',
      'col-6': '50%',
      'col-7': '58.333333333333336%',
      'col-8': '66.66666666666667%',
      'col-9': '75%',
      'col-10': '83.33333333333334%',
      'col-11': '91.66666666666667%',
      'col-12': '100%',
      'full': '100%',
      'screen': '100vh',
    },
  },
})

export default defineConfig(config)
