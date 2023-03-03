const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2000,
      },
  });


const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.header__listcontainer')

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})

document.querySelectorAll('.header__listcontainer').forEach(n => n.addEventListener('click', ()=> {
    addEventListener('click', ()=> {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active')
    })
} ))


const ObjDown = document.querySelector('.start__scroll')
const ObjInfo = document.querySelector('.header__list-item-info')
const ObjAbout = document.querySelector('.header__list-item-about')
const ObjCulture = document.querySelector('.header__list-item-culture')



ObjDown.addEventListener('click', ()=> {
  window.scrollBy({
    top: 1600,
    behavior: 'smooth'
  }
  )
})

ObjInfo.addEventListener('click', ()=> {
  window.scrollBy({
    top: 1600,
    behavior: 'smooth'
  }
  )
})


ObjAbout.addEventListener('click', ()=> {
  window.scrollBy({
    top: 2700,
    behavior: 'smooth'
  }
  )
})

ObjCulture.addEventListener('click', ()=> {
  window.scrollBy({
    top: 3800,
    behavior: 'smooth'
  }
  )
})



const btns = document.querySelectorAll('.information__side-readmore');
for (let btn of btns) {
    // Добавление событие клика для каждой кнопки
    btn.onclick = () => {
        // Получение элемента с текстом из текущего бока
        const text = btn.parentElement.querySelector('.information__side-hidetext');
        // Изменение видимости
        text.style.display = (text.style.display === 'none') ? 'block' : 'none';
    };
}

const btns1 = document.querySelectorAll('.culture__readmore');
for (let btn1 of btns1) {
  btn1.onclick = () => {
    const text1 = btn1.parentElement.querySelector('.culture__texthide');
    text1.style.display = (text1.style.display === 'none') ? 'block' : 'none'
  }
}