var footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    {
      name: "Sergio Almirón",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Sergio Batista",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Ricardo Bochini",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Claudio Borghi",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "José Luis Brown",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Daniel Passarella",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Jorge Burruchaga",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Néstor Clausen",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "José Luis Cuciuffo",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Diego Maradona",
      position: "midfielder",
      isCaptain: true,
    },
    {
      name: "Jorge Valdano",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Héctor Enrique",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Oscar Garré",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Ricardo Giusti",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Luis Islas",
      position: "goalkeeper",
      isCaptain: false,
    },
    {
      name: "Julio Olarticoechea",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Pedro Pasculli",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Nery Pumpido",
      position: "goalkeeper",
      isCaptain: false,
    },
    {
      name: "Oscar Ruggeri",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Carlos Tapia",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Marcelo Trobbiani",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Héctor Zelada",
      position: "goalkeeper",
      isCaptain: false,
    },
  ],
};

// required information to be displayed
const headCoach = document.getElementById("head-coach");
headCoach.innerText = footballTeam.headCoach;
const team = document.getElementById("team");
team.innerText = footballTeam.team;
const year = document.getElementById("year");
year.innerText = footballTeam.year;

// select container logic
const selectContainer = document.getElementById("players");
selectContainer.addEventListener("change", function () {
  const value = selectContainer.value;
  let filteredPlayers;
  if (value === "all") {
    filteredPlayers = footballTeam.players;
  } else {
    filteredPlayers = footballTeam.players.filter(
      (player) => player.position === value
    );
  }

  displayPlayerCards(filteredPlayers);
});

const playerCardsContainer = document.getElementById("player-cards");

// implementing player cards display
function displayPlayerCards(players) {
  playerCardsContainer.innerHTML = "";
  players.forEach((player) => {
    const playerCard = document.createElement("div");
    playerCard.classList.add("player-card");
    const captionStatus = player.isCaptain;
    if (captionStatus) {
      playerCard.innerHTML = `
            <h2>(Captain) ${player.name}</h2>
            <p>Position: ${player.position}</p>
        `;
    } else {
      playerCard.innerHTML = `
            <h2>${player.name}</h2>
            <p>Position: ${player.position}</p>
        `;
    }
    playerCardsContainer.appendChild(playerCard);
  });
}

displayPlayerCards(footballTeam.players);
