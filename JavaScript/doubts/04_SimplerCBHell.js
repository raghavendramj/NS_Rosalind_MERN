function getUser(id, callBack) {
  console.log("Reading an user from database !");
  console.log("Id :- ", id);
  let raghav = { id: id, username: "raghavendra" };
  callBack(raghav);
}
function getRepositories(username, callBack) {
  console.log(`Extracting Repositories for ${username}....`);
  let repos = ["javascript", "java"];
  callBack(repos);
}

function getCommits(repositoryName, callBack) {
  console.log("Extracting Commits for " + repositoryName + "....");
  let commits = ["callbackhell.js", "clean.js"];
  callBack(commits);
}

getUser(1, (user) => {
  console.log("User :- ", user);
  getRepositories(user.username, (repos) => {
    console.log(repos);
    getCommits(repos[0], (commits) => {
      console.log("Commits are :- ", commits);
      // Callback Hell ("-_-)
    });
  });
});
