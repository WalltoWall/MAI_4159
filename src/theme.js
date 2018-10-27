// Modular scale
const ms = (v = 0, r = Math.sqrt(2)) => Math.pow(r, v)

// Space separated values
const ssv = f => (...v) => v.map(f).join(' ')

const theme = {
  colors: {
    black: '#000',
    white: '#fff',
    darkgrey1: '#283f43',
    darkgrey2: '#646e6a',
    yellow: '#ddd33d',
    darkyellow: '#c3b822',
    lightgrey1: '#f6f4f2',
    lightgrey2: '#e6e5e2',
    lightgrey3: '#8B928F',
    lightgrey4: '#B1B6B4'
  }, 
  lineHeights: {
    solid: 1,
    title: 1.3,
    copy: 1.55,
  },
  fontFamilies: {
    sans: '"din-condensed", "Barlow Condensed", Helvetica, sans-serif',
    serif: '"Essonnes", "Abhaya Libre", "Times New Roman", serif',
    sans2: '"Quasimoda", "Lato", Helvetica, sans-serif',
  },
  letterSpacing: {
    heading: '0.15rem',
    button: '0.1rem',
  },
  width: {
    mobile: '90%',
    tablet: '80%',
    desktop: '75%',
    xl: '60%',
  },
  fontSize: s => ms(s / 2) + 'rem',
  mediaSizes: {
    t: '20rem',
    s: '30rem',
    m: '48rem',
    l: '70rem',
    x: '90rem',
    xx: '100rem',
    xxx: '110rem',
  },
  radius: ssv(s => (typeof s === 'number' ? ms(s / 2) + 'rem' : s)),
  spacing: ssv(s => (typeof s === 'number' ? ms(s) + 'rem' : s)),
  transition: '150ms',
}

theme.mediaQueries = Object.keys(theme.mediaSizes).reduce((acc, curr) => {
  acc[curr] = `@media (min-width: ${theme.mediaSizes[curr]})`
  return acc
}, {})

// Shortcuts
theme.c = theme.colors
theme.f = theme.fontSize
theme.ff = theme.fontFamilies
theme.lh = theme.lineHeights
theme.mq = theme.mediaQueries
theme.ms = theme.mediaSizes
theme.r = theme.radius
theme.s = theme.spacing
theme.t = theme.transition
theme.ls = theme.letterSpacing
theme.w = theme.width

export default theme
