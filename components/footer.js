import { anchorComponent } from "./anchorComponent.js"

export const Footer = (images, data) => {
  const imagesFooter = {
    logoPortfolio: undefined,
    homeIcon: undefined,
    servicesIcon: undefined,
    contactIcon: undefined
  }
  images.forEach(image => {
    if(image.fields.title === 'logo-portfolio') {
      imagesFooter.logoPortfolio = image.fields.file.url
    }
    if(image.fields.title === 'services-icon') {
      imagesFooter.servicesIcon = image.fields.file.url
    }
    if(image.fields.title === 'home-icon') {
      imagesFooter.homeIcon = image.fields.file.url
    }
    if(image.fields.title === 'contact-icon') {
      imagesFooter.contactIcon = image.fields.file.url
    }
  })

  const whereToFindMe = data.items.filter(item => item.sys.contentType.sys.id === 'whereToFindMe')
  const footerComponentHTML = document.querySelector('footer')
  const contentFooter = `
  <img class='w-[5rem]' src=${imagesFooter.logoPortfolio} alt='logo-portfolio'></img>
  <div class="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-10">
      <a class="flex flex-row items-center justify-center gap-[10px]" href="#home">
        <img src="${imagesFooter.homeIcon}" alt="home-icon">
        Home
      </a>
      <a class="flex flex-row items-center justify-center gap-[10px]" href="#services-section">
        <img src="${imagesFooter.servicesIcon}" alt="service-icon">
        Services
      </a>
      <a class="flex flex-row items-center justify-center gap-[10px]" href="#form-section">
        <img src="${imagesFooter.contactIcon}" alt="contact-icon">
        Contact
      </a>
  </div>
  <section id='anchor-id' class="flex flex-row gap-4">
  </section>
  <span>©2022 - <a href="https://apx.school">https://apx.school</a></span>
  `
  footerComponentHTML.innerHTML = contentFooter


  // Create section anchor element, and childs
  const anchorIdElement = document.getElementById('anchor-id')
  const anchoresContent = []
  whereToFindMe.forEach(link => {
    const { url, site } = link.fields
    const image = images.find(image => image.fields.title === site)
    anchoresContent.push(anchorComponent(url, image))
  })
  anchorIdElement.append(...anchoresContent)
}