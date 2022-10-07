import fetch from "node-fetch";

async function applicationOfAsyncAndAwait(user) {
  //fetch(`https://api.github.com/users/${user.name}`).then(console.log);
  let response = await fetch(`https://api.github.com/users/${user.name}`);
 
  let githubUser = await response.json(); 
  console.log("githubUser.avatar_url :- ", githubUser.avatar_url)
  console.log("githubUser.url :- ", githubUser.url)
}

applicationOfAsyncAndAwait({ name: "raghavendramj" });
