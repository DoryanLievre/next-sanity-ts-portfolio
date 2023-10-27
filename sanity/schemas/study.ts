import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'study',
  title: 'Study',
  type: 'document',
  fields: [
    {
        name: 'diplomaTitle',
        title: 'DiplomaTitle',
        type: 'string',
    },
    {
        name: 'schoolImage',
        title: 'SchoolImage',
        type: 'image',
        options: {
            hotspot: true,
        }
    },
    {
        name: 'schoolName',
        title: 'SchoolName',
        type: 'text',
    },
    {
      name: 'dateStarted',
      title: 'DateStarted',
      type: 'date',
    },
    {
      name: 'dateEnded',
      title: 'DateEnded',
      type: 'date',
    },
    {
      name:'isCurrentlyStudyingHere',
      title:'IsCurrentlyStudyingHere',
      type:'boolean',
    },
    {
      name:'technologies',
      title:'Technologies',
      type:'array',
        of:[{ type:'reference',to:{type:'skill'}}],
    },
    {
      name:'whatILearned',
      title:'WhatILearned',
      type:'array',
        of:[{ type:'string'}],
    },
  ],
})
