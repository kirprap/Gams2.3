const RELEASE_TAG = "2.3.2"; //UPDATE EVERY TIME YOU WANT TO PUBLISH A NEW VERSION WITH BIG CHANGES
const gameList = document.querySelector(".game-list");
let spinny = false;
let inbt = null;
let number = 0;
// adds all the games
function addAllGames() {
  document.querySelector(".game-list").innerHTML = games;
}
addAllGames();

function randomgame() {
  const games = document.querySelectorAll(".game-link");
  const range = games.length - 1 + 1;
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  let thing = 1 + (array[0] % range);
  const newnode = games[thing].cloneNode(true);
  if (document.querySelector(".game-rand") != null) {
    document.querySelector(".game-rand").remove();
  }
  document.querySelector(".random").appendChild(newnode);
  newnode.classList.remove("game-link");
  newnode.classList.add("game-rand");
}
randomgame();
function spinnywheel(reset = false) {
  if (reset === true) {
    number = 0;
    gameList.style.transform = `rotate(${0}deg)`;
    return;
  }
  if (!spinny) {
    spinny = true;

    inbt = setInterval(() => {
      number++;
      gameList.style.transform = `rotate(${number}deg)`;
    }, 20);
  } else {
    spinny = false;
    clearInterval(inbt);
    inbt = null;
  }
}
(function () {
  function sortGameListAlpha() {
    const list = document.querySelector(".game-list");
    if (!list) return;
    const items = Array.from(list.querySelectorAll(".game-link"));
    items.sort((a, b) => {
      const ta = (a.textContent || "").trim().toLowerCase();
      const tb = (b.textContent || "").trim().toLowerCase();
      return ta.localeCompare(tb, undefined, { numeric: true });
    });
    items.forEach((i) => list.appendChild(i));
  }
  sortGameListAlpha();

  const input = document.getElementById("search-input");
  const gameList = document.querySelectorAll(".game-link");
  const noResults = document.getElementById("no-results");
  const total = gameList.length;
  // initialize placeholder with total games
  if (input) {
    input.placeholder = `Search ${total} Games...`;
    input.setAttribute("aria-label", `Search ${total} Games...`);
  }

  function normalize(text) {
    return text.trim().toLowerCase();
  }

  function filterGames() {
    const q = normalize(input.value || "");
    let visible = 0;
    if (q == "end") {
      window.open("https://youtu.be/eVTXPUF4Oz4?si=fJegVrBYO1yf0I80");
    }
    gameList.forEach((a) => {
      const title = normalize(a.textContent || a.innerText || "");
      if (q === "" || title.indexOf(q) !== -1) {
        a.style.display = "";
        visible++;
      } else {
        a.style.display = "none";
      }
    });
    noResults.style.display = visible === 0 ? "block" : "none";
  }

  input.addEventListener("input", filterGames);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      input.value = "";
      filterGames();
    }
  });
})();

function checkForUpdates() {
  fetch("https://api.github.com/repos/apathak31-wq/Gams2.3/contents/.version")
    .then((res) => res.json())
    .then((file) => {
      // file.content is Base64 encoded
      const decoded = atob(file.content);
      if (decoded) {
        const fileInfo = decoded
          .split("\n")
          .map((line) => line.trim())
          .find((line) => line && !line.startsWith("#"));

        if (fileInfo != RELEASE_TAG) {
          const result = confirm(
            `New version available: ${fileInfo}, click OK to go to the download page`,
          );

          if (result) {
            window.open("https://api.github.com/repos/apathak31-wq/Gams2.3");
          } else {
            console.log("User canceled");
          }
        }
      }
    })
    .catch((err) => console.error(err));
}

window.addEventListener("keydown", (e) => {
  if (e.key === "`") {
    window.location.href = "https://classroom.google.com/";
  }
});

setInterval(() => {
  checkForUpdates();
}, 300000); //auto checks for updates every 5 minutes
