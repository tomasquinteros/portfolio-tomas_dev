async function FormSend() {
  const formElement = document.querySelector('form')
  formElement.addEventListener('submit', async function (e) {
    e.preventDefault()
    const nameValue = document.getElementById('name').value
    const emailValue = document.getElementById('email').value
    const messageValue = document.getElementById('message').value
    

    const data = {
      to: 'tomassaidquinteros@gmail.com',
      message: `Name: ${nameValue}, Email: ${emailValue}, Message: ${messageValue}`
    }
    await fetch('https://apx-api.vercel.app/api/utils/dwf', {
      method:'POST',
      headers: {
        "content-type": 'aplication/json'
      },
      body: JSON.stringify(data) 
    })

    formElement.reset()
  })
}


export const FormComponent = (images) => {
  const image = images.find(image => image.fields.title === 'send-icon')
  const formSectionElement = document.getElementById('form-section')
  const formSectionContent = `<div id="container" class="w-screen p-4 lg:max-w-[960px]  md:flex md:justify-between">
  <h2 class="text-4xl font-bold text-center py-[39px]">Write me</h2>
  <form class="flex flex-col gap-[25px] mb-32 md:w-2/4">
  <ul class="flex flex-col justify-start gap-8 font-bold md:grid md:grid-cols-2 md:gap-4">
    <li>
      <label class="md:w-full flex flex-col justify-start gap-2"> 
        Name
        <input class="bg-[#393E4680] px-[24px] py-[16px] rounded-[16px] outline-none" type="text" name="nombre" id="name" placeholder="Your name">
      </label>
    </li>
    <li>
      <label class="w-full flex flex-col justify-start gap-2">
        Email
        <input class="bg-[#393E4680] px-[24px] py-[16px] rounded-[16px] outline-none" type="email" name="email" id="email" placeholder="your@email.com">
      </label>
    </li>
    <li class="md:col-span-2">
      <label class="w-full flex flex-col justify-start gap-2">
        Message
        <textarea class="bg-[#393E4680] px-[24px] py-[16px] rounded-[16px] outline-none resize-none" name="mensaje" id="message" cols="30" rows="10"></textarea>
      </label>
    </li>
  </ul>
  <button class="bg-[#00ADB5] flex items-center justify-center text-[18px] py-[14px] w-full rounded-3xl font-bold text-black md:w-2/4">
    <p>Send</p> 
    <img src="${image.fields.file.url}" alt="${image.fields.title}"></button>
  </form>
  </div>`
  formSectionElement.innerHTML = formSectionContent
  FormSend()
}