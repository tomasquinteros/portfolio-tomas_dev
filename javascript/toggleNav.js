
export function toggleNav () { 
  const menuIcon = document.getElementById('menu')
  menuIcon.addEventListener('click', () => {
    const navElement = document.querySelector('nav')
    navElement.classList.replace('hidden', 'block')
    navElement.classList.add('z-10', 'top-0', 'left-0', 'fixed', 'bg-[#13171C]', 'w-full', 'h-screen')
  })
  const menuCloseIcon = document.getElementById('menu-close')
  menuCloseIcon.addEventListener('click', () => {
    const navElement = document.querySelector('nav')
    navElement.classList.replace('block','hidden')
  })
}