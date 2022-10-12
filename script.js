// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const title = document.querySelector("h2");

const superEventHandler = {
  handleMouseEnter: function () {
    title.style.color = "#1abc9c";
    title.textContent = "The mouse is here!";
  },
  handleMouseLeave: function () {
    title.style.color = "#3498db";
    title.textContent = "The mouse is gone!";
  },
  handleWindowResize: function () {
    title.style.color = "#9b59b6";
    title.textContent = "You just resized!";
  },
  handleRightClick: function () {
    title.style.color = "#e74c3c";
    title.textContent = "That was a right click!";
  },
  handleMouseClick: function () {
    title.style.color = "#f39c12";
    title.textContent = "DONE!";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundImage =
      "url('https://mblogthumb-phinf.pstatic.net/20151203_24/chltmdfl3909_1449132928232qyPST_JPEG/https3A2F2F41.media.tumblr.com2F52da9cf40ed9889bbefe7322a2487d162Ftumblr_ny.jpg?type=w800')";
  },
};

title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener("contextmenu", superEventHandler.handleRightClick);
title.addEventListener("click", superEventHandler.handleMouseClick);
