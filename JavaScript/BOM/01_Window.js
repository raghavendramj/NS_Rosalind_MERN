// The window object is global
var counter = 1;
var showCounter = () => console.log(counter);

console.log(window.counter);
window.showCounter();

// Also, document.documentElement.clientWidth and document.documentElement.clientHeight properties
// indicate the width and height of the page viewport.

// //Window size
// The window object has four properties related to the size of the window:

// The innerWidth and innerHeight properties return the size of the page viewport inside the browser window (not including the borders and toolbars).
// The outerWidth and outerHeight properties return the size of the browser window itself.

//1) Window size

const width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

const height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;    

//2) Open a new window
let url = "http://127.0.0.1:5500/02_Test.html";
let jsWindow = window.open(url, 'Test');

window.open("https://www.google.com");


window.open("https://www.google.com", 'about', 'height=600,width=800');

//3) Resize a window

let jsWindow2 = window.open("https://www.google.com", 'about', 'height=600,width=800');

setTimeout(() => {
    jsWindow2.resizeTo(600, 300);
}, 3000);