import { toggleNav } from "../../../javascript/toggleNav.js"
import { Footer } from "../footerPages.js"
import { getImages } from "../../../data/getImages.js"
import { getData } from "../../../data/getData.js"
import { FormComponent } from "../../FormComponent.js"
import HeaderPages from "../headerPages.js"


function main() {
  getData('https://cdn.contentful.com//spaces/f7f9bymxn2ht/environments/master/entries?access_token=B9mFXpucpAoxHEGGlZNIV4yBQBqdJ8uKQ08re1f8dD4').then(data => {
    getImages().then(images => {
      HeaderPages(images)
      FormComponent(images)
      Footer(images, data)
      toggleNav()
    })
  })
}

main()