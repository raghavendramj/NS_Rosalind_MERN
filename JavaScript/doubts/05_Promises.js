function getUser(id) {
  return new Promise((resolve, reject) => {
    console.log("Reading an user from database !");
    let raghav = { id: id, username: "raghavendra" };
    resolve(raghav); //  --> then()
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    console.log(`Extracting Repositories for ${username}....`);
    let repos = ["javascript", "java"];
    resolve(repos);
  });
}

function getCommits(repositoryName) {
  return new Promise((resolve, reject) => {
    console.log("Extracting Commits for " + repositoryName + "....");
    let commits = ["callbackhell.js", "clean.js"];
    resolve(commits);
  });
}

getUser(1)
  .then((user) => getRepositories(user.username))
  .then((repos) => getCommits(repos[0]))
  .then((commits) => console.log("Commits are :- ", commits));

// getUser(1) //return you a promise -> resolves/rejects -> then is called
//   .then((user) => {
//     console.log("User:- ", user);
//     return getRepositories(user.username);
//   })
//   .then((repos) => {
//     console.log(repos);
//     return getCommits(repos[0]);
//   })
//   .then((commits) => console.log("Commits are :- ", commits));
