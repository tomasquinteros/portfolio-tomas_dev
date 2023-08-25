import { CardComponent } from "./card.js"

export const PortfolioComponent = (images, data) => {
  let portfolioContent = []
  const portfolioComponentHTML = document.getElementById('portfolioComponentHTML')
  const arrayPortfolio = data.items.filter(item => item.sys.contentType.sys.id === 'projects')
  arrayPortfolio.forEach(portfolioItem => {
    const { nombre, description, id, linkProject } = portfolioItem.fields
    const image = images.find(image => image.fields.title === id)
    portfolioContent.push(CardComponent(nombre, description, image, linkProject))
  })

  portfolioComponentHTML.append(...portfolioContent)
}
