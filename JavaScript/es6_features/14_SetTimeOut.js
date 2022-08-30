function setTimeOutDemo() {
  console.log("1");
  setTimeout(() => console.log("2"), 3000);
  setTimeout(() => console.log("3"), 0);
  setTimeout(() => console.log("4"), 2000);
  console.log("5");
}
