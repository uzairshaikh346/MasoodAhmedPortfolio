import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})



const builder = imageUrlBuilder(client)

import type { Image } from 'sanity';
export function urlFor(source: Image | Record<string, unknown>) {
  return builder.image(source)
}

// Gallery queries
export const galleryQueries = {
  getAllImages: `*[_type == "galleryImage"] | order(_createdAt desc) {
    _id,
    title,
    image,
    description
  }`,
  
  getAllVideos: `*[_type == "galleryVideo"] | order(_createdAt desc) {
    _id,
    title,
    video,
    description
  }`
};