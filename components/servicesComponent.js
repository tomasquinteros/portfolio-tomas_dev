import { CardComponent } from "./card.js";

export const ServicesComponent = (images, data) => {
    let servicesContent = []
    const servicesComponentHTML = document.getElementById('servicesComponentHTML')
    const arrayServices = data.items.filter(item => item.sys.contentType.sys.id === 'misServicios')
    arrayServices.forEach(service => {
      const { title, description, id } = service.fields
      const image = images.find(image => image.fields.title === id)
      servicesContent.push(CardComponent(title, description, image))
    })

    servicesComponentHTML.append(...servicesContent)
}