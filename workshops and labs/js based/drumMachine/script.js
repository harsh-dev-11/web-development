const allKeys = document.querySelectorAll(".drum-pad");
const displayElement = document.getElementById("display");
const audio = new Audio();
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

function playSound(id) {
  let src;
  let title;
  sounds.forEach((sound) => {
    if (sound.id === id) {
      src = sound.src;
      title = sound.title;
    }
  });
  if (src) {
    audio.src = src;
    displayElement.textContent = title;
    audio.play();
  } else {
    console.log("Sound not found!!");
    return;
  }
}

allKeys.forEach((key) => {
  key.addEventListener("click", () => {
    playSound(key.querySelector("audio").id);
  });
});

// To do: Key listener functionality
window.addEventListener("keydown", (event) => {
  let key = event.key.toUpperCase();
  let sound = sounds.forEach((sound) => {
    sound.id === key;
  });
  //   playSound(sound.id);
  console.log(sound);
});
