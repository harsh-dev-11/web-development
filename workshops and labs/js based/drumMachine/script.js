const allKeys = document.querySelectorAll(".drum-pad");
const displayElement = document.getElementById("display");
const sounds = [
  {
    id: "Q",
    title: "Heater-1",
    src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-1.mp3",
  },
  {
    id: "W",
    title: "Heater-2",
    src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-2.mp3",
  },
  {
    id: "E",
    title: "Heater-3",
    src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-3.mp3",
  },
  {
    id: "A",
    title: "Heater-4",
    src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-4_1.mp3",
  },
  {
    id: "S",
    title: "Clap",
    src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-6.mp3",
  },
  {
    id: "D",
    title: "Open HH",
    src: "https://cdn.freecodecamp.org/curriculum/drum/Dsc_Oh.mp3",
  },
  {
    id: "Z",
    title: "Kick n' Hat",
    src: "https://cdn.freecodecamp.org/curriculum/drum/Kick_n_Hat.mp3",
  },
  {
    id: "X",
    title: "Kick",
    src: "https://cdn.freecodecamp.org/curriculum/drum/RP4_KICK_1.mp3",
  },
  {
    id: "C",
    title: "Closed HH",
    src: "https://cdn.freecodecamp.org/curriculum/drum/Cev_H2.mp3",
  },
];

function playSound(id, audio) {
  // setting up the audio element
  const audioElement = audio;
  sounds.forEach((sound) => {
    if (sound.id === id) {
      audioElement.src = sound.src;
      audioElement.title = sound.title;
    }
  });
  displayElement.textContent = audio.title;
  audioElement.play();
}

// clicking event
allKeys.forEach((key) => {
  key.addEventListener("click", () => {
    const id = key.id.replace("key-", "");
    const audio = document.getElementById(id);
    playSound(id, audio);
    keyPressedStyle(id);
  });
});

// key-press event
document.addEventListener("keydown", (event) => {
  let id = event.key.toUpperCase();
  const audio = document.getElementById(id);
  playSound(id, audio);
  keyPressedStyle(id);
});

function keyPressedStyle(id) {
  let key = document.getElementById(`key-${id}`);
  if (!key) return;
  key.style.transition = "0.05s";
  key.style.transform = "scale(0.97)";
  setTimeout(() => {
    key.style.transform = "scale(1)";
  }, 100);
}
