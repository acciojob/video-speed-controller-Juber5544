const video = document.getElementById('player__video');
const playerButton = document.getElementById('player__button');
const progressBar = document.getElementById('progress');
const progressFilled = document.getElementById('progress__filled');
const volumeControl = document.getElementById('volume');
const playbackSpeedControl = document.getElementById('playbackSpeed');
const rewindButton = document.getElementById('rewind');
const skipButton = document.getElementById('skip');

const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  if (this.name === 'volume') {
    video.volume = this.value;
  } else if (this.name === 'playback-speed') {
    video.playbackRate = this.value;
  }
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

playerButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playerButton.textContent = '❚ ❚';
  } else {
    video.pause();
    playerButton.textContent = '►';
  }
});

video.addEventListener('timeupdate', () => {
  const progress = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${progress}%`;
});

progressBar.addEventListener('click', (e) => {
  const progressBarWidth = progressBar.offsetWidth;
  const clickPosition = e.offsetX;
  const seekTime = (clickPosition / progressBarWidth) * video.duration;
  video.currentTime = seekTime;
});

rewindButton.addEventListener('click', () => {
  video.currentTime -= 10;
});

skipButton.addEventListener('click', () => {
  video.currentTime += 25;
});
