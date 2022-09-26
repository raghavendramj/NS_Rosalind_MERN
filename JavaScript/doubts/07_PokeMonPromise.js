const ALL_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon?limit=50";

function getPromise(URL) {
  let promise = new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest();
    req.open("GET", URL);
    req.onload = function () {
      if (req.status == 200) {
        let results = JSON.parse(req.response).results;
        console.log("results -> ", results);
        resolve(results);
      } else {
        reject("There is an Error!");
      }
    };
    req.send();
  });
  return promise;
}

//Example 1: Get 50 Pokémon's information:
const consumer = () => {
  // We have discussed this function already!
  let pokemonPromise = getPromise(ALL_POKEMONS_URL);

  let loading = true;
  loading && console.log("Loading...");

  //Case - 01 -> then and error block
  pokemonPromise
    .then(
      (result) => {
        console.log({ result }); // Log the result of 50 Pokemons
        document.getElementById("pokemon").innerHTML = result;
      },
      (error) => {
        // As the URL is a valid one, this will not be called.
        console.log("We have encountered an Error! :- ", error); // Log an error
      }
    )
    .finally(() => {
      loading = false;
      console.log(`Promise Settled and loading is ${loading}`);
    });

  //Case - 02 -> Catch block
  pokemonPromise
    .then((result) => {
      console.log({ result }); // Log the result of 50 Pokemons
      document.getElementById("pokemon").innerHTML = result;
    })
    .catch((error) => console.log(error));
};
