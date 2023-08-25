import { getData } from "../data/getData.js"

export const PresentationComponent = () => {
  getData('https://cdn.contentful.com//spaces/f7f9bymxn2ht/environments/master/entries/3oKW74AwX4nmtZR048sm6R?access_token=B9mFXpucpAoxHEGGlZNIV4yBQBqdJ8uKQ08re1f8dD4').then(data => {

    const presentationComponentHTML = document.getElementById('presentationComponentHTML')

    const {title, description} = data.fields
    const presentationContent = `
    <div id="container" class="max-w-[960px]  p-[24px] md:p-0 flex flex-col md:flex-row md:items-center justify-between gap-[30px]">
        <div class='flex flex-col gap-4'>
          <h2 class="text-3xl font-bold">${title}</h2>
          <p class="font-normal text-xl text-[#EEEEEEBF]">${description}</p>
        </div>
        <img class='grayscale rounded-3xl md:w-[300px] md:h-[300px]' src="https://lh3.googleusercontent.com/a/AAcHTtfZEEqMp3R79sLtrsk-HoJHlnPLyTBSxeHM3ihergZE-w=s288-c-no" alt="foto-mia">
      </div>
    ` 
    presentationComponentHTML.innerHTML = presentationContent

  })
}
