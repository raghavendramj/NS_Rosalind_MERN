function getUser(id) {
  return new Promise((resolve, reject) => {
    console.log("Reading an user from database !");
    let raghav = { id: id, username: "raghavendra" };
    resolve(raghav);
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
