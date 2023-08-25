export const anchorComponent = (link, image) => {
  const anchor = document.createElement('a')
  anchor.setAttribute('href', link)
  anchor.setAttribute('target', '_blank')
  const anchorContent = `<img src="${image.fields.file.url}" alt=""></a>`
  
  anchor.innerHTML = anchorContent
  return anchor
}