const poll = new Map();

function addOption(option) {
  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  } else if (option === "" || option === undefined) {
    return `Option cannot be empty.`;
  } else {
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
  }
}

function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  } else {
    if (poll.get(option).has(voterId)) {
      return `Voter ${voterId} has already voted for "${option}".`;
    } else {
      poll.get(option).add(voterId);
      return `Voter ${voterId} voted for "${option}".`;
    }
  }
}
addOption("Malasiya");
addOption("Singapore");
addOption("UAE");

vote("UAE", "testVote01");
vote("Singapore", "testVote02");
vote("Singapore", "testVote03");

function displayResults() {
  let result = "Poll Results:\n";
  poll.forEach((value, key) => {
    result += `${key}: ${value.size} votes\n`;
  });
  return result.trim();
}
