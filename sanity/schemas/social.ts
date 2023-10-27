import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    {
        name: 'title',
        title: 'Title',
        description: 'social media name',
        type: 'string',
    },
    {
        name: 'url',
        title: 'Url',
        type: 'url',
    },
  ],
})
