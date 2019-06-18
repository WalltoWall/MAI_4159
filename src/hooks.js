import { useEffect, useState } from 'react'
import { get } from 'lodash'

// get previewData from window
export const usePreviewData = () => {
  const [previewData, _] = useState(
    typeof window !== 'undefined' ? get(window, '__PRISMIC_PREVIEW_DATA') : null
  )
  return previewData
}

// delete preview data when component mounts to enable route changes to the same custom type
export const useDeletePreviewDataEffect = () =>
  useEffect(() => {
    typeof window !== 'undefined' && (window.__PRISMIC_PREVIEW_DATA = null)
  }, [])
