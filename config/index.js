const dev = process.env.NODE_ENV !== 'production'
// used to have the api work for both production and development
// site need to be updated to the production url
export const server = dev ? 'http://localhost:3000' : 'https://dynamicrisk.vercel.app'

export default dev
