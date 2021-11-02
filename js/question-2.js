// Question 2:

const GamesContainer = document.querySelector(".gamesContainer");

async function retrieveGames() {
  const APIKey = "45e32eb32f5b409ebc39c627486fa6db";
  const APIURL =
    "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=" + APIKey;
  try {
    GamesContainer.innerHTML = `<i class="fas fa-spinner loader"></i>`;
    const response = await fetch(APIURL);
    const games = (await response.json()).results;
    GamesContainer.innerHTML = "";
    for (let i = 0; i <= 7; i++) {
      GamesContainer.innerHTML += `<div class="game">
                                      <h3>${games[i].name}</h3>
                                      <p>Rating: ${games[i].rating}</p>
                                      <p>Tags: ${games[i].tags.length}</p>
                                  </div>`;
    }
  } catch (error) {
    console.log("There was an error fetching the API: " + error);
  }
}

retrieveGames();
