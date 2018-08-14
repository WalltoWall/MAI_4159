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
    lightgrey1: '#e7e4db',
    lightgrey2: '#f6f4f2',
  },
  lineHeights: {
    solid: 1,
    title: 1.3,
    copy: 1.4,
  },
  fontFamilies: {
    sans: '"Barlow Condensed", Helvetica, sans-serif',
    serif: '"Abhaya Libre", "Times New Roman", serif',
    sans2: '"Lato", Helvetica, sans-serif',
  },
  fontSize: s => ms(s / 2) + 'rem',
  mediaSizes: {
    t: '20rem',
    s: '30rem',
    m: '48rem',
    l: '60rem',
    x: '78rem',
    xx: '90rem',
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

export default theme
