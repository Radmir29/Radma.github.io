// Анимация курсора
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

// Эффект при наведении на ссылки
const links = document.querySelectorAll('a, button');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('hovered');
    });
    
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovered');
    });
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Эффект при скролле для хедера
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Концертные эффекты
const stageEffect = () => {
  const smoke = document.querySelector('.smoke');
  const lasers = document.querySelector('.lasers');
  const spotlight = document.querySelector('.spotlight');
  
  // Активация при скролле
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const triggerHeight = document.querySelector('#music').offsetTop - 500;
    
    if (scrollY > triggerHeight) {
      smoke.style.opacity = '0.7';
      lasers.style.opacity = '0.6';
      
      // Движение прожектора за курсором
      document.addEventListener('mousemove', (e) => {
        spotlight.style.setProperty('--x', `${e.clientX}px`);
        spotlight.style.setProperty('--y', `${e.clientY}px`);
        spotlight.style.opacity = '0.4';
      });
    } else {
      smoke.style.opacity = '0';
      lasers.style.opacity = '0';
      spotlight.style.opacity = '0';
    }
  });
};

// Запуск эффектов
stageEffect();