

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  }

  updateTime(); // Вызываем функцию один раз для обновления времени сразу

  // Обновляем время каждую секунду
  setInterval(updateTime, 1000);

  const slider = document.querySelector('.slider');
  let counter = 1;

  function slide() {
    slider.style.transform = `translateX(-${counter * 100}%)`;
    counter++;
    if (counter === 5) {
      counter = 0;
    }
  }

  setInterval(slide, 4000); // Автоматическая прокрутка каждые 3 секунды

  var pathEls = document.querySelectorAll('path');
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute('stroke-dashoffset', offset);
  anime({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: anime.random(1000, 3000),
    delay: anime.random(0, 0),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });
}

function highlightWord(element) {
  // Удаляем класс 'active' у всех элементов, если они его имеют
  document.querySelectorAll('.word-button').forEach(function(wordButton) {
    wordButton.classList.remove('active');
  });

  // Добавляем класс 'active' нажатому элементу
  element.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registrationForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }

    // Здесь можно добавить код для отправки данных на сервер или другие действия
    console.log('Данные для регистрации:', { username, email, password });
  });
});
