let data = {
  toniScore: 0,
  eliasScore: 0,
  toniStreak: 0,
  eliasStreak: 0
};

// Load saved data
function loadData() {
  const saved = localStorage.getItem("trackerData");
  if (saved) {
    data = JSON.parse(saved);
  }
}

// Save data
function saveData() {
  localStorage.setItem("trackerData", JSON.stringify(data));
}

// Update UI
function updateUI() {
  document.getElementById("toniScore").textContent = data.toniScore;
  document.getElementById("eliasScore").textContent = data.eliasScore;

  document.getElementById("toniStreak").textContent = data.toniStreak;
  document.getElementById("eliasStreak").textContent = data.eliasStreak;

  updateLeader();
}

// Add point
function addPoint(player) {
  if (player === "toni") {
    data.toniScore++;
  } else {
    data.eliasScore++;
  }

  updateStreaks();
  saveData();
  updateUI();
}

// Win streak logic
function updateStreaks() {
  if (data.toniScore > data.eliasScore) {
    data.toniStreak++;
    data.eliasStreak = 0;
  } else if (data.eliasScore > data.toniScore) {
    data.eliasStreak++;
    data.toniStreak = 0;
  }
}

// Leader display
function updateLeader() {
  const leader = document.getElementById("leader");

  if (data.toniScore > data.eliasScore) {
    leader.textContent = "🏆 Toni is in the lead";
  } 
  else if (data.eliasScore > data.toniScore) {
    leader.textContent = "🏆 Elias is in the lead";
  } 
  else {
    leader.textContent = "⚖️ It's a tie";
  }
}

// Reset everything
function resetAll() {
  data = {
    toniScore: 0,
    eliasScore: 0,
    toniStreak: 0,
    eliasStreak: 0
  };

  saveData();
  updateUI();
}

// Start app
loadData();
updateUI();