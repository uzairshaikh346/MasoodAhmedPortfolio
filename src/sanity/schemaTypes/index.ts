import { type SchemaTypeDefinition } from 'sanity'
import blog_schema from './blog_schema'
import { galleryImage } from './gallery_schema'
import { galleryVideo } from './gallery_schema'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog_schema, galleryImage, galleryVideo],
}
