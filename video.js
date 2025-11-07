document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('speaker-none-voice');
  const playButton = document.querySelector('.play');

  video.autoplay = true;
  video.muted = true;
  video.play();

  playButton.addEventListener('click', () => {
    if (video.muted) {
      video.currentTime = 0;   // Сбросить видео в начало
      video.muted = false;     // Включить звук
      video.play();            // Запустить видео
      playButton.textContent = 'Звук Включен';
    } else {
      video.muted = true;      // Выключить звук
      // Видео не останавливаем, не сбрасываем время
      playButton.textContent = 'Звук Выключен';
    }
  });
});
