let inputBox = document.getElementById("autoCompBox");
inputBox.addEventListener("input", (e) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${e.target.value}`)
    .then((response) => response.json())
    .then((json) => console.log(json));
});

function debounce(callBack, delay = 250) {
  let timeout; 
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callBack(...args);
    });
  };
}
