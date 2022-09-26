function getPromise(URL) {
  let promise = new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest();
    req.open("GET", URL);
    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        reject("There is an Error!");
      }
    };
    req.send();
  });
  return promise;
}

function promiseChain() {
  const ALL_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon?limit=50";
  let promise = getPromise(ALL_POKEMONS_URL);

  promise.then((result) => {
    let onePokemon = JSON.parse(result).results[0].url;
    console.log("1. onePokemon -> ", onePokemon);
    return onePokemon;
  });
  promise.then((onePokemonURL) => {
    console.log("2. onePokemonURL -> ", onePokemonURL);
    return getPromise(onePokemonURL);
  });
  promise.then((pokemon) => {
    console.log("3. JSON.parse(pokemon) -> ", JSON.parse(pokemon));
    console.log(JSON.parse(pokemon));
  });
}

const consumer = () => {
  // promiseALL();
  promiseAny();
};

//This method waits for all the promises to resolve and returns the array of promise results.
function promiseALL() {
  const BULBASAUR_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
  const RATICATE_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/raticate";
  const KAKUNA_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/kakuna";

  let promise_1 = getPromise(BULBASAUR_POKEMONS_URL);
  let promise_2 = getPromise(RATICATE_POKEMONS_URL);
  let promise_3 = getPromise(KAKUNA_POKEMONS_URL);

  Promise.all([promise_1, promise_2, promise_3])
    .then((result) => {
      console.log({ result });
    })
    .catch((error) => {
      console.log("An Error Occured");
    });
}

//This method waits for all the promises to resolve and returns the array of promise results.
function promiseAny() {
  const BULBASAUR_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
  const RATICATE_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/raticate";
  const KAKUNA_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/kakuna";

  let promise_1 = getPromise(BULBASAUR_POKEMONS_URL);
  let promise_2 = getPromise(RATICATE_POKEMONS_URL);
  let promise_3 = getPromise(KAKUNA_POKEMONS_URL);

  Promise.any([promise_1, promise_2, promise_3])
    .then((result) => {
      console.log({ result });
    })
    .catch((error) => {
      console.log("An Error Occured");
    });
}


// The Promise.allSettled() method
// romise.allSettled([promises]) -
//  This method waits for all promises to settle(resolve/reject) 
//  and returns their results as an array of objects. 