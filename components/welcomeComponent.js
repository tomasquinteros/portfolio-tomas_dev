import { getData } from "../data/getData.js"

export const WelcomeComponent = () => {
  getData('https://cdn.contentful.com//spaces/f7f9bymxn2ht/environments/master/entries/7aYFOv89H1ftZCfpWNsnst?access_token=B9mFXpucpAoxHEGGlZNIV4yBQBqdJ8uKQ08re1f8dD4').then(data => {
    const welcomeComponentHTML = document.getElementById('welcomeComponentHTML')
    const {title} = data.fields
    const arrayTitle = title.split(' ')
    
    const welcomeContent = `
    <div id="container" class="max-w-[960px] flex flex-col md:flex-row md:justify-center md:gap-[8rem] items-center gap-[54px]">
        <h1 class="text-6xl font-bold flex flex-col justify-between md:justify-start md:items-start md:text-7xl items-center">${arrayTitle[0]} <span class="text-[#00ADB5] flex flex-col items-center md:items-start md:flex-row md:gap-4">${arrayTitle[1]} <span class="text-[#00ADB5]">${arrayTitle[2]}!</span></h1> </span> 
        <div class="flex flex-col gap-10">
          <img class="md:w-[300px] w-[150px]" src="assets/cohete.png" alt="cohete">
          <img class="w-[150px]" src="assets/sombra-cohete.png" alt="sombra-cohete">
        </div>
      </div>
    `

    welcomeComponentHTML.innerHTML = welcomeContent
  })
}