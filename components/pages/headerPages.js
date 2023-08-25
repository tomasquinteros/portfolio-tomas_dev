export default function HeaderPages(images) {
  const imagesHeaders = {
    logoPortfolio: undefined,
    menuIcon: undefined,
    closeMenuIcon: undefined
  }
  images.forEach(image => {
    if(image.fields.title === 'logo-portfolio') {
      imagesHeaders.logoPortfolio = image.fields.file.url
    }
    if(image.fields.title === 'menu-icon') {
      imagesHeaders.menuIcon = image.fields.file.url
    }
    if(image.fields.title === 'close-menu-icon') {
      imagesHeaders.closeMenuIcon = image.fields.file.url
    }
  })
  const headerComponentHTML = document.querySelector('header')
  const headerContent = `
    <div class="flex justify-between items-center md:px-[40px] md:py-[20px] lg:px-[80px]">
      <a href='../index.html'><img class="w-[6rem]" src='${imagesHeaders.logoPortfolio}' alt='logo-portfolio'></img></a>
      <img id='menu' class="md:hidden" src='${imagesHeaders.menuIcon}' alt="menu">
      <nav class='hidden md:block flex flex-col'>
        <div class="md:hidden ml-auto p-4">
          <img id='menu-close' src='${imagesHeaders.closeMenuIcon}' alt="close-menu">
        </div>
        <ul class="md:flex md:gap-8 md:flex-row toggle-menu flex flex-col items-center justify-center gap-8 h-full text-5xl md:text-2xl">
        <li>
            <a href="./portfolio.html">Portfolio</a>
            </li>
          <li>
          <a href="./services.html">Services</a>
          </li>
          <li>
            <a href="./contact.html">Contact</a>
          </li>
        </ul>
      </nav>
    </div>`

  headerComponentHTML.innerHTML = headerContent

}