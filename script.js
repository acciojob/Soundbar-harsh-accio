//your JS code here. If required.
// Select all sound buttons and stop button
const soundButtons = document.querySelectorAll('.buttons .btn');
const stopButton = document.querySelector('.buttons .stop');

let currentAudio = null;

// Function to play sound
soundButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Stop currently playing audio
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Play new audio based on button id
    const soundFile = `sounds/${button.id}.mp3`;
    currentAudio = new Audio(soundFile);
    currentAudio.play();
  });
});

// Stop button functionality
stopButton.addEventListener('click', () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});
