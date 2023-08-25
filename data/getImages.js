export async function getImages () {
  const API_LINK = 'https://cdn.contentful.com//spaces/f7f9bymxn2ht/environments/master/entries?access_token=B9mFXpucpAoxHEGGlZNIV4yBQBqdJ8uKQ08re1f8dD4'
  
  const res = await fetch(API_LINK)
  const data = await res.json()
  const images = await data.includes.Asset
  return images 
}