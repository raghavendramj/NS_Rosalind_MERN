//Singer -> Producing Code
//Fans -> Consuming Code
//Promise -> Links -> Producing Code(Singer) <-> Consuming Code together(Fans)

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

//Release Song Case / Failurecase

// promise:SUCCESS state: pending -> resolve("done") -> state: fulfilled
// promise:FAILURE state: pending -> reject("done") -> state: rejected
// Consume the code from promise. then

//Producing Code
let songPromiseFunction = (songName) => {
  return new Promise((resolve, reject) => {
    console.log("songName :- ", songName.length);
    if (songName) {
      resolve("My next song - " + songName); //Success
    } else {
      reject("Couldn't record the song!"); //Failure
    }
  });
};

//Consuing Code
const songPromise = songPromiseFunction("");

songPromise.then(
  (resp) => console.log("success -> ", resp),
  (err) => console.log("Error occured! ", err)
);
