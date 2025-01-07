// Parent container event listener
const buttonContainer = document.getElementById("buttonContainer");
buttonContainer.addEventListener("click", () => {
  alert("Container clicked!");
});

// Button 1: Inline Event Handler
// The HTML should have: <button id="button1" onclick="showMessage(event)">Button 1</button>
function showMessage(event) {
  event.stopPropagation();
  alert("Button 1 - Inline Event Handler");
}

// Button 2: DOM Level 0 Event Handler
const button2 = document.getElementById("button2");
button2.onclick = function(event) {
  event.stopPropagation();
  alert("Button 2 - DOM Level 0 EH");
};

// Button 3: DOM Level 2 Event Listener
const button3 = document.getElementById("button3");
button3.addEventListener("click", function(event) {
  event.stopPropagation();
  alert("Button 3 - DOM Level 2 EH");
});

// Buttons 4 and 5: Event Delegation
const buttonChildContainer = document.getElementById("buttonChildContainer");
buttonChildContainer.addEventListener("click", function(event) {
  event.stopPropagation();
  if (event.target.id === "button4") {
    alert("Button 4 - Event Delegation 1");
  } else if (event.target.id === "button5") {
    alert("Button 5 - Event Delegation 2");
  } else {
    alert("Child container clicked!");
  }
});
