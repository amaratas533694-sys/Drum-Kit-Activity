document.querySelectorAll('.drum-btn').forEach(btn => {
  btn.addEventListener('click', () => playSound(btn));
});

function playSound(btn) {
  const sound = btn.getAttribute('data-sound');
  if (sound) {
    const audio = new Audio(sound);
    audio.currentTime = 0;
    audio.play();
    btn.classList.add('active');
    setTimeout(() => btn.classList.remove('active'), 150);
  }
}

const keyMap = {
  w: 'w',
  a: 'a',
  s: 's',
  d: 'd',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  ' ': ' ',
  ShiftLeft: 'shift',
  ShiftRight: 'shift'
};

document.addEventListener('keydown', (e) => {
  let key = e.key.toLowerCase();
  if (key === ' ') key = ' ';
  if (keyMap[key] || keyMap[e.code]) {
    const btn = document.querySelector(`.drum-btn[data-key="${keyMap[key] || keyMap[e.code]}"]`);
    if (btn) {
      btn.click();
    }
  }
});
