// Tasks :--

// 1. Get user details
// 2. Validate Login
// 3. Fetch Repositories
// 4. Get Commits
// 5. Get Files

//UserDetailsInfo..
let userDet = (userInfo) => {
  console.log("User info is :- ", userInfo);
  return userInfo;
};

let validate = (username, password) => {
  if (username == "raghav" && password === "raghav@123") {
    console.log("Valid Credentials!");
    return true;
  } else {
    console.log("Invalid User!");
    return false;
  }
};
let getRepos = (username) => {
  if (username !== "raghav") return;

  let repos = ["javascript", "java"];
  console.log("Repos are :- ", repos);
  return repos;
};

let getCommits = (repositoryName) => {
  if (repositoryName != "javascript") {
    console.log("Invalid Repo");
    return;
  }
  let commits = ["123", "456"];
  console.log("Commits are :- ", commits);
  return repos;
};

let files = (commitId) => {
  if (commitId != "123") {
    console.log("Invalid Commit Id");
    return;
  }
  let files = ["promise.js", "callbacks.js"];
  console.log("files are :- ", files);
  return files;
};

let getFilesBasedOnCommitId = (userInfo) => {
  getUserDetails(userInfo, (userInfo) => {
    console.log("User info is :- ", userInfo);
    validateUserInfo(userInfo.username, (username, password) => {
      if (username == "raghav" && password === "raghav@123") {
        console.log("Valid Credentials!");
        fetchRepos(userInfo.username, (username) => {
          if (username !== "raghav") return;

          let repos = ["javascript", "java"];
          console.log("Repos are :- ", repos);
          fetchCommits(username, (username) => {
            if (username !== "raghav") return;
            let repos = ["javascript", "java"];
            console.log("Repos are :- ", repos);
            getFiles("123", (commitId) => {
              if (commitId != "123") {
                console.log("Invalid Commit Id");
                return;
              }
              let files = ["promise.js", "callbacks.js"];
              console.log("files are :- ", files);
              return files;
            });
            return repos;
          });
          return repos;
        });

        return true;
      } else {
        console.log("Invalid User!");
        return false;
      }
    });
    return userInfo.username;
  });
};

let getUserDetails = (userInfo, callBack);
let validateUserInfo = (username, password, callBack);
let fetchRepos = (username, callBack);
let fetchCommits = (repositoryName, callBack);
let getFiles = (commitID, callBack);
