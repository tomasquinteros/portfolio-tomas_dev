

export const CardComponent = (title, description, image, link) => {
  const {url} = image.fields.file
  const cardElement = document.createElement('article')
  cardElement.classList.add('bg-[#393E4680]', 'px-[30px]', 'md:px-[15px]', 'py-[42px]', 'rounded-xl', 'md:flex', 'md:flex-col', 'md:gap-4', 'flex', 'flex-col', 'gap-4', 'w-[270px]')
  const cardContent = `
  <img class='w-[250px] h-[150px] object-cover' src='${image ? url : 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg'}'   alt="${title}">
  <h3 class="text-lg font-bold">
    ${title}
  </h3>
  <p >
    ${description}
  </p>
  <a class='ml-auto text-[#00ADB5]' href='${!link ? '#' : link}' target='${!link ? '_self' : '_blank'}' >See more</a>
  `
  cardElement.innerHTML = cardContent
  return cardElement
}