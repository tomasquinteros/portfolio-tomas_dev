import Header from "../components/header.js"
import { toggleNav } from "../javascript/toggleNav.js"
import { Footer } from "./footer.js"
import { WelcomeComponent } from "./welcomeComponent.js"
import { PresentationComponent } from "./presentationComponent.js"
import { ServicesComponent } from "./servicesComponent.js"
import { getImages } from "../data/getImages.js"
import { getData } from "../data/getData.js"
import { FormComponent } from "./FormComponent.js"


function main() {
  getData('https://cdn.contentful.com//spaces/f7f9bymxn2ht/environments/master/entries?access_token=B9mFXpucpAoxHEGGlZNIV4yBQBqdJ8uKQ08re1f8dD4').then(data => {
    getImages().then(images => {
      Header(images)
      WelcomeComponent()
      PresentationComponent()
      ServicesComponent(images, data)
      FormComponent(images)
      Footer(images, data)
      toggleNav()
    })
  })
}

main()