exports.onClientEntry = () => {
  // NOTE: Don't polyfill Promise here (Gatsby already includes a Promise polyfill)

  // IntersectionObserver polyfill for gatsby-image (Safari, IE)
  if (typeof window.IntersectionObserver === 'undefined') {
    import('intersection-observer')
    console.log('Polyfill loaded: intersection-observer')
  }

  // Array.from polyfill for yup (IE)
  if (typeof Array.from === 'undefined') {
    import('core-js/fn/array/from')
    console.log('Polyfill loaded: core-js/fn/array/from')
  }
}

exports.shouldUpdateScroll = () => {
  if (window.__navigatingToLink === true) return [0, 0]

  return true
}

exports.onRouteUpdate = async () => {
  window.__navigatingToLink = false

  // Object-fit/Object-position polyfill for gatsby-image (IE)
  const testImg = document.createElement('img')
  if (
    typeof testImg.style.objectFit === 'undefined' ||
    typeof testImg.style.objectPosition === 'undefined'
  ) {
    const ofi = await import('object-fit-images')
    ofi.default()
    console.log('Polyfill loaded: object-fit-images')
  }
}