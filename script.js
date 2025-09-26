const soundButtons = document.querySelectorAll('.buttons .btn');
const stopButton = document.querySelector('.buttons .stop');

let currentAudio = null;

soundButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Stop previous audio if playing
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio.remove(); // remove from DOM
    }

    // Create an audio element in DOM
    const audio = document.createElement('audio');
    audio.src = `sounds/${button.id}.mp3`;
    audio.autoplay = true; // play automatically
    audio.id = "audio-player"; // optional id
    document.body.appendChild(audio);

    currentAudio = audio;
  });
});

stopButton.addEventListener('click', () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio.remove(); // remove from DOM
    currentAudio = null;
  }
});
