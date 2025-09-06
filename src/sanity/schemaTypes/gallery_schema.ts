// schemas/galleryImage.ts
export const galleryImage = {
  name: 'galleryImage',
  title: 'Gallery Images',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
  validation: (Rule: { required: () => unknown }) => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ],
  validation: (Rule: { required: () => unknown }) => Rule.required()
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'text',
  validation: (Rule: { required: () => unknown }) => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'title',
      caption: 'caption',
      media: 'image'
    },
  prepare(selection: { title?: string; caption?: string; media?: unknown }) {
      const {title, caption} = selection
      return {
        title: title,
        subtitle: `📸 ${caption?.substring(0, 50)}...`
      }
    }
  }
}

// schemas/galleryVideo.ts
export const galleryVideo = {
  name: 'galleryVideo',
  title: 'Gallery Videos',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
  validation: (Rule: { required: () => unknown }) => Rule.required()
    },
    {
      name: 'video',
      title: 'Video File',
      type: 'file',
      options: {
        accept: 'video/*'
      },
  validation: (Rule: { required: () => unknown }) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
  validation: (Rule: { required: () => unknown }) => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description'
    },
  prepare(selection: { title?: string; description?: string }) {
      const {title, description} = selection
      return {
        title: title,
        subtitle: `🎥 ${description?.substring(0, 50)}...`
      }
    }
  }
}