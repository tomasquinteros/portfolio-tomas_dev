import HeaderPages from "../headerPages.js"
import { Footer } from "../footerPages.js"
import { PortfolioComponent } from "../../portfolioComponent.js"
import { toggleNav } from "../../../javascript/toggleNav.js"
import { getImages } from "../../../data/getImages.js"
import { getData } from "../../../data/getData.js"

function main () {
  getData('https://cdn.contentful.com//spaces/f7f9bymxn2ht/environments/master/entries?access_token=B9mFXpucpAoxHEGGlZNIV4yBQBqdJ8uKQ08re1f8dD4').then(data => {
    getImages().then(images => {
      HeaderPages(images)
      PortfolioComponent(images, data)
      Footer(images, data)
      toggleNav()
    })
  })
}



main()
