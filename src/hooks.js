import { useEffect, useState } from 'react'
import { get } from 'lodash'

const IS_BROWSER = typeof window !== 'undefined'

// get previewData from window
export const getPreviewData = () => {
  return get(IS_BROWSER ? window : {}, '__PRISMIC_PREVIEW_DATA')
}

// delete preview data when component mounts to enable route changes to the same custom type
export const deletePreviewData = () =>
  IS_BROWSER && (window.__PRISMIC_PREVIEW_DATA = null)
