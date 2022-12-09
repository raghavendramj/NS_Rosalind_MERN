let inputBox = document.getElementById("autoCompBox");
let apiURL;
inputBox.addEventListener("input", (e) => {
  apiURL = `https://jsonplaceholder.typicode.com/todos/${e.target.value}`;
  //   debounce(heavyAPICall, 1000);
  heavyAPICall();
});

function heavyAPICall() {
  console.log("heavyAPICall ");
  fetch(apiURL)
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function debounce(callBack, delay = 250) {
  console.log("debounce ");
  let timeout;

  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callBack();
    }, delay);
  };
}
