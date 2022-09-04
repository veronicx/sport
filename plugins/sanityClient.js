import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: '21fy9g0s',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: true
})

export default client
