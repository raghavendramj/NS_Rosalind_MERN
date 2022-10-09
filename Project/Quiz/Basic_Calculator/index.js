let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    let clickedBtn = e.target.innerText;
    console.log("Content :- ", clickedBtn);

    switch (clickedBtn) {
      case "C":
        display.innerText = "";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error";
        }
        break;
      default:
        display.innerText += clickedBtn;
    }
  });
});
