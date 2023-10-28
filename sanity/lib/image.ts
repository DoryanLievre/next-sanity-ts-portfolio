import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

// @ts-ignore
export const urlForImage = (source: Image | Image_2) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}
