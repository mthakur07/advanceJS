function updateClock() {
  const now = new Date();
  const hour = now.getHours().toString().padStart(2, '0');
  const minute = now.getMinutes().toString().padStart(2, '0');
  const second = now.getSeconds().toString().padStart(2, '0');

  document.querySelector('.hour').textContent = hour;
  document.querySelector('.minute').textContent = minute;
  document.querySelector('.second').textContent = second;
}

// Call the function to update the clock immediately
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
